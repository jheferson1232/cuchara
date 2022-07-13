export const getName = (m) => {
  const name = m.split(' ')[0].toLowerCase()
  return name.charAt(0).toUpperCase() + name.slice(1)
}
