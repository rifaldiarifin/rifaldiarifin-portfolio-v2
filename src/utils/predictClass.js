export function predictClass(condition = () => true, className = 'active', giveSpace = true) {
  if (giveSpace) return condition() ? ` ${className}` : ''
  return condition() ? `${className}` : ''
}
