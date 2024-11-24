import { render, screen } from '@testing-library/vue'

import SubNav from '@/components/navigation/SubNav.vue'
import { describe, expect } from 'vitest'

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('display job count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          }
        },
      })

      const jobCount = screen.getByText('359')

      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does not display jobs count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          }
        },
      })

      const jobCount = screen.queryByText('359')

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
