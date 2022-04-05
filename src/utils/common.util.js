export function wait(delay, arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arg)
    }, delay)
  })
}
