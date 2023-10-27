export default function Icons8({
  icon = 'home',
  color = null,
  gradient = false,
  style = 'regular',
  size = null,
  filter = null
}) {
  return (
    <span
      className={`icons8-${style} ${icon}${gradient ? ' gradient' : ''}`}
      style={{
        '--i8-ratio': size,
        '--i8-gradient': color,
        filter: filter
      }}
    ></span>
  )
}
