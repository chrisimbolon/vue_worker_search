import { evenOrOdd, countTriangle, multiply } from '@/playground'

describe('basic math', () => {
  it('add two numbers', () => {
    expect(2 + 2).toBe(4)
  })

  describe('evenOrOdd', () => {
    it('evaluate the number is even', () => {
      expect(evenOrOdd(6)).toBe('even')
    })

    // describe('evenOrOdd', () => {
    //   it('evaluate the number is even', () => {
    //     expect(evenOrOdd(3)).toBe('odd')
    //   })
    // })
  })

  describe('multiply', () => {
    it('multiply two numbers', () => {
      expect(multiply(3, 5)).toBe(15)
    })
  })

  describe('countTriangle', () => {
    it('evaluate volume of triangle', () => {
      expect(countTriangle(4, 5)).toBe(10)
    })
  })
})
