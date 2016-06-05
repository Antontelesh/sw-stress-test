export default function DeferredStore () {

  let deferreds = {}

  const create = (id) => {
    deferreds[id] = Promise.defer()
    return deferreds[id]
  }

  const take = (id) => {
    let deferred = deferreds[id]
    deferreds[id] = null
    return deferred
  }

  return {
    create,
    take,
  }

}
