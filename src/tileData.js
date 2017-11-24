import { TILE_WIDTH, TILE_HEIGHT } from './consts'

const HEIGHT = 16
const WIDTH = 16

const data = {}

for (let y = 0; y < HEIGHT; y += 1) {
  for (let x = 0; x < WIDTH; x += 1) {
    const id = (y * HEIGHT) + x
    data[id] = {
      char: id,
      x: x * TILE_WIDTH,
      y: y * TILE_HEIGHT
    }
  }
}

export default data
