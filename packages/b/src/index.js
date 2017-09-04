import { makeAFace } from 'a'
import badGuy from 'supervillains'

export function nameABadGuy () {
  const face = makeAFace()
  const meanie = badGuy.random()
  return `If you make this face: ${face},
    then this bad guy shows up ${meanie}`
}
