/**
 * 深拷贝
 */
function deepClone (obj) {
  const ret = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        ret[key] = deepClone(obj[key])
      } else {
        ret[key] = obj[key]
      }
    }
  }
  return ret
}

/**
 * 浅拷贝
 */
function shallowClone (obj) {
  const ret = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = obj[key]
    }
  }
  return ret
}
