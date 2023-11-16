export function fileObject({ uuid, name, directory, type, to, children }) {
  return {
    uuid,
    name,
    type,
    directory,
    to,
    children
  }
}
