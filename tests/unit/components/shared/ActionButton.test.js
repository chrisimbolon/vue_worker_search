import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/shared/ActionButton.vue'
import { describe, it, expect } from 'vitest'

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary',
      },
    })

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('applies one of several styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary',
      },
    })

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('primary')
  })
})
