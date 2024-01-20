export default function Codicon({ icon = 'add', color = null, size = null, filter = null }) {
  return (
    <span
      className={`codicon codicon-${icon}`}
      style={{
        '--vscodicon-size': size,
        '--vscodicon-color': color,
        filter: filter
      }}
    ></span>
  )
}
