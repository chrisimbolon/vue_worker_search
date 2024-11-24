import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import MainNav from '@/components/navigation/MainNav.vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    })
  }

  it('display company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Seribu Tukang')
    expect(companyName).toBeInTheDocument()
  })

  it('displayss menu itmes for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')

    const navigationMenuText = navigationMenuItems.map((item) => item.textContent)

    expect(navigationMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Seribu Tukang',
      'How we hire',
      'Students',
      'Jobs',
    ])
  })

  describe('when the user logged in', () => {
    it('display user profile picture', async () => {
      renderMainNav()

      const profileImage = screen.queryByRole('img', {
        name: /user profile image/i,
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i,
      })

      await userEvent.click(loginButton)
    })
  })
})
