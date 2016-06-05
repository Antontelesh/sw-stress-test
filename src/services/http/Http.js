import uniqueId from 'lodash/uniqueId'
import RequestQueue from './RequestQueue'
import DeferredStore from './DeferredStore'
import RequestProcessor from './RequestProcessor'
import ResponseHub from './ResponseHub'

export default function Http () {

  const queue = RequestQueue()
  const store = DeferredStore()
  const response_hub = ResponseHub(store)

  const createWorker = (queue, shouldPerform) => {
    let worker = RequestProcessor(queue, shouldPerform)
    worker.subscribe(response_hub.respond)
    return worker
  }

  const createRequest = (url, priority) => ({
    id: uniqueId('request-'),
    url,
    priority,
  })

  const get = (url, priority = 'normal') => {
    let request = createRequest(url, priority)
    let deferred = store.create(request.id)
    queue.put(request, priority)
    return deferred.promise
  }

  // we create as many workers as many requests we want to perform
  // simultaneously
  createWorker(queue, () => true)
  createWorker(queue, () => true)
  createWorker(queue, () => true)
  createWorker(queue, () => true)
  createWorker(queue, request => request.priority === 'high')

  return {
    get,
  }
}

Http.getInstance = function () {
  Http.instance = Http.instance || Http()
  return Http.instance
}
