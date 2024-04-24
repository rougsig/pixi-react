import {Instance} from '#/PIXIHostConfig'

export type DiffSet = {
  changes: DiffSetNode[]
}

export type DiffSetNode = [key: string, value: unknown]

export const createDiffSet:
  (prev: Record<string, unknown>, next: Record<string, unknown>) => DiffSet =
  (prev, next) => {
    const changes: DiffSetNode[] = []

    for (const key in prev) {
      if (next.hasOwnProperty(key) || !prev.hasOwnProperty(key) || prev[key] === null) {
        continue
      }
      if (key === 'children') {
        continue
      }

      changes.push([key, null])
    }

    for (const key in next) {
      const prevValue = prev[key]
      const nextValue = next[key]

      if (!next.hasOwnProperty(key) || nextValue === prevValue || (nextValue === null && prevValue === null)) {
        continue
      }
      if (key === 'children') {
        continue
      }

      changes.push([key, nextValue])
    }

    return {changes}
  }

export const applyDiffSet = (target: Instance, diffSet: DiffSet) => {
  for (const [key, value] of diffSet.changes) {
    target[key] = value
  }
}
