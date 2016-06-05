export default function TailPutter () {
  const put = (value, queue) => {
    queue.push(value)
  }

  return {put}
}
