export function switchBooleanOfArray(index, arr) {
  if (typeof arr !== 'object') throw new Error('"switchBooleanOfArray": "arr" argument must be array')
  const newArr = [...arr]
  for (let x = 0; x < arr.length; x++) {
    newArr[x] = false
  }
  newArr[index] = true
  return newArr
}
