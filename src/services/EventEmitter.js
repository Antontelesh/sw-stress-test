import each from 'lodash/forEach'
import pull from 'lodash/pull'

export default function EventEmitter () {

  let listeners = []

  const emit = value => {
    each(listeners, fn => { fn(value) })
  }

  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      pull(listeners, listener)
    }
  }

  return {
    emit,
    subscribe,
  }

}
