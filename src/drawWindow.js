import drawTile from './drawTile'
import tileData from './tileData'
import { TILE_HEIGHT, TILE_WIDTH } from './consts'

export default function drawWindow (ctx, tiles, window) {

  const { title, x, y } = window

  let data = []
  data.push(218)
  data.push(196)
  data.push(91)
  data.push(0)

  for (let i = 0; i < title.length; i++) {
    data.push(title.charCodeAt(i))
  }

  data.push(0)
  data.push(93)
  data.push(196)
  data.push(196)
  data.push(196)
  data.push(196)
  data.push(196)
  data.push(196)
  data.push(196)
  data.push(191)

  data
    .map((char, ix) => {
      return { char, x: ix, y: 1 }
    })
    .forEach(item => {
      const tile = tileData[item.char]
      drawTile(
        ctx,
        tiles,
        (item.x + x) * TILE_WIDTH,
        (item.y + y) * TILE_HEIGHT,
        tile.x,
        tile.y,
        '#463F3A',
        '#F4F3EE'
      )
    })

}
