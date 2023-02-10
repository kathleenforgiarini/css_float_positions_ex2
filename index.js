let shown;

Array.from(document.querySelectorAll('input')).forEach(input => {
  const container = input.parentElement
  const list = container.querySelector('ul')
  const choices = list.querySelectorAll('li')

  const hide = () => {
    list.style.display = 'none'
    shown = null
  }

  const show = () => {
    shown && (shown.style.display = 'none')
    list.style.display = 'block'
    shown = list
  }

  input.addEventListener('focus', () => show())
  container.addEventListener('click', event => event.stopPropagation())
  document.addEventListener('click', () => hide())

  Array.from(choices).forEach(choice => {
    choice.addEventListener('click', event => {
      input.value = choice.textContent
      hide()
    })
  })

  hide()
})
