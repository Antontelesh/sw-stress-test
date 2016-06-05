export default function HeadPutter () {

  const put = (value, queue) => {
    queue.unshift(value)
  }

  return {put}
}
