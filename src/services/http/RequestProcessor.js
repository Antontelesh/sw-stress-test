import EventEmitter from '../EventEmitter'

export default function RequestProcessor (queue, shouldPerform) {

  const emitter = EventEmitter()
  let performing = false

  const createResponse = (request, status, body) => ({
    request_id: request.id,
    ok: status !== 'error',
    status,
    body,
  })

  const perform = (request) => {
    performing = true
    queue.take(request)
    let image = new Image()
    image.onload = () => {
      let response = createResponse(request, 'success')
      emitter.emit(response)
      performing = false
      check()
    }
    image.onerror = event => {
      let response = createResponse(request, 'error', event)
      emitter.emit(response)
      performing = false
      check()
    }
    image.src = request.url
  }

  const check = () => {
    if (!performing) {
      let request = queue.get()
      if (request && shouldPerform(request)) {
        perform(request)
      }
    }
  }

  queue.subscribe(check)
  check()

  return {
    subscribe: emitter.subscribe,
  }

}
