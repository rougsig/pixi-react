export type DiffSet = {
  changes: DiffSetNode[]
}

export type DiffSetNode = [key: string, value: unknown]

export const createDiffSet:
  (last: Record<string, unknown>, next: Record<string, unknown>) => DiffSet =
  (last, next) => {
    const changes: DiffSetNode[] = []

    for (const key in last) {
      if (next.hasOwnProperty(key) || !last.hasOwnProperty(key) || last[key] === null) {
        continue
      }
      if (key === 'children') {
        continue
      }

      changes.push([key, null])
    }

    for (const key in next) {
      const lastValue = last[key]
      const nextValue = next[key]

      if (!next.hasOwnProperty(key) || nextValue === lastValue || (nextValue === null && lastValue === null)) {
        continue
      }
      if (key === 'children') {
        continue
      }

      changes.push([key, nextValue])
    }

    return {changes}
  }
