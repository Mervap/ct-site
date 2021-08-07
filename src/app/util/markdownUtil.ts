function countHashes(line: string): number {
  let count = 0
  for (const c of line) {
    if (c === '#') ++count
    else break
  }
  return count
}

export function mergeHeaders(text: string): string {
  const lines = text.split('\n')
  let prevHashes = -1
  let res = ''
  for (let line of lines) {
    const hashes = countHashes(line)
    if (prevHashes !== -1) {
      if (hashes === 0 || hashes !== prevHashes) {
        res += '\n'
      } else {
        line = line.substring(hashes)
      }
    }
    res += line
    prevHashes = hashes
  }
  return res
}
