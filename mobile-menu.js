const header = document.querySelector('.primary-header')
const navigation = document.querySelector('.primary-nav')
const button = document.querySelector('.navigation-menu-btn')

/**
 * Opens navigation menu
 */
function openMenu () {
  header.setAttribute('data-menu', 'opened')
  button.setAttribute('aria-expanded', 'true')

  document.body.addEventListener('animationend', e => {
    if (e.animationName === 'showBackground') {
      navigation.setAttribute('data-state', 'opened')
    }

    if (e.animationName === 'openMenu') {
      navigation.setAttribute('data-items', 'visible')
    }
  })
}

/**
 * Closes navigation menu
 */
function closeMenu () {
  navigation.setAttribute('data-items', 'is-hidden')
  button.setAttribute('aria-expanded', 'false')

  document.body.addEventListener('animationend', e => {
    if (e.animationName === 'slideOut') {
      navigation.setAttribute('data-state', 'is-closing')
    }

    if (e.animationName === 'closeMenu') {
      header.setAttribute('data-menu', 'is-closing')
    }
  })
}

button.addEventListener('click', _ => {
  const isOpen = button.getAttribute('aria-expanded') === 'true'

  isOpen ? closeMenu() : openMenu()
})

document.body.addEventListener('animationend', e => {
  if (e.animationName === 'hideBackground') {
    navigation.setAttribute('data-items', 'hidden')
    navigation.setAttribute('data-state', 'closed')
    header.setAttribute('data-menu', 'closed')
  }
})
