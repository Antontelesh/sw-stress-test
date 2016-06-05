import EventEmitter from '../EventEmitter'
import TailPutter from './TailPutter'
import HeadPutter from './HeadPutter'
import pull from 'lodash/pull'

export default function RequestQueue () {

  const emitter = EventEmitter()
  const queue = []
  const putters = {
    normal: TailPutter(),
    high: HeadPutter(),
  }

  const getPutter = priority =>
    putters[priority] || putters.normal

  const put = (request, priority) => {
    let putter = getPutter(priority)
    putter.put(request, queue)
    emitter.emit()
  }

  const get = () => {
    return queue[0]
  }

  const take = request => {
    return pull(queue, request)
  }

  return {
    take,
    get,
    put,
    subscribe: emitter.subscribe,
  }
}
