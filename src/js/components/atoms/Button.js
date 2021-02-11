function Button({
  text,
  href
}) {
  const buttonType = href ? 'a' : 'button'

  return `
  <${buttonType}
    class="button"
    ${href ? `href=${href}` : ''}
  >
      <span>${text}</span>
  </${buttonType}>`
}

export default Button
