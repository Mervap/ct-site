export const debounce = <T>(fun: (...args: T[]) => void, ms: number) => {
  let timer: number | null
  return (...agrs: T[]) => {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(_ => {
      timer = null
      fun.apply(this, agrs)
    }, ms)
  };
}