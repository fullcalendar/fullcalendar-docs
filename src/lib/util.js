
export function querySelectorAll(selector, parent) {
  return toArray(
    (parent || document).querySelectorAll(selector)
  )
}

export function toArray(input) {
  return Array.prototype.slice.call(input)
}

export function htmlEscape(s) {
  return (s + '').replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#039;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br />')
}
