import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'
import HeadLine from '@/components/jobsearch/HeadLine.vue'

describe('HeadLine', () => {
  beforeEach(() => {
    vi.useFakeTimers() // Use fake timers before each test
  })

  afterEach(() => {
    vi.useRealTimers() // Reset timers after each test
  })

  it('displays introductory action verb', () => {
    render(HeadLine)

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i,
    })

    expect(actionPhrase).toBeInTheDocument()
  })

  it('changes action verb at a consistent interval', () => {
    const setIntervalSpy = vi.spyOn(global, 'setInterval') // Spy on setInterval
    render(HeadLine)

    expect(setIntervalSpy).toHaveBeenCalled()
    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 3000)

    setIntervalSpy.mockRestore() // Restore original setInterval
  })

  it('swaps action verb after interval', async () => {
    render(HeadLine)

    vi.advanceTimersByTime(3000) // Advance timers by 3 seconds
    await nextTick()

    const actionPhrase = screen.getByRole('heading', {
      name: /design for everyone/i, // Next action after "Build" is "Design"
    })

    expect(actionPhrase).toBeInTheDocument()
  })
})
