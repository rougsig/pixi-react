export type DiffSet = {
  memoized: Record<string, unknown>
  changes: [key: string, value: unknown, isEvent: boolean, keys: string[]][]
}
