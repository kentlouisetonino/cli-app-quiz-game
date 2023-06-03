export default function sleep(ms = 1000) {
  return new Promise((r) => setTimeout(r, ms))
}
