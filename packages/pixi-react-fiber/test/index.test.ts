import {describe, expect, test} from 'vitest'
import {sum} from '#/index'

describe('testing sum', () => {
  test('2 + 2 = 4 #unit', () => {
    // Arrange
    const a = 2
    const b = 2

    // Act
    const actual = sum(a, b)

    // Assert
    expect(actual)
      .toBe(4)
  })
})
