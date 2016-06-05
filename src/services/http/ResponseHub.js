export default function ResponseHub (store) {

  const respond = response => {
    let deferred = store.take(response.request_id)
    if (response.ok) {
      deferred.resolve(response.body)
    } else {
      deferred.reject(response.body)
    }
  }

  return {respond}

}
