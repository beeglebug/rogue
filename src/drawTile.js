import { TILE_HEIGHT, TILE_WIDTH } from './consts'

const _canvas = document.createElement('canvas')
const _ctx = _canvas.getContext('2d')

_canvas.width = TILE_WIDTH
_canvas.height = TILE_HEIGHT

/**
 * draw a tile to a canvas
 * @param ctx
 * @param tiles
 * @param dx
 * @param dy
 * @param sx
 * @param sy
 * @param bgColor
 * @param fgColor
 */
export default function drawTile (ctx, tiles, dx, dy, sx, sy, bgColor, fgColor) {
  ctx.fillStyle = bgColor
  ctx.fillRect(dx, dy, TILE_WIDTH, TILE_HEIGHT)

  _ctx.clearRect(0, 0, TILE_WIDTH, TILE_HEIGHT)
  _ctx.globalCompositeOperation = 'source-over'
  _ctx.drawImage(tiles, sx, sy, TILE_WIDTH, TILE_HEIGHT, 0, 0, TILE_WIDTH, TILE_HEIGHT)
  _ctx.globalCompositeOperation = 'source-in'
  _ctx.fillStyle = fgColor
  _ctx.fillRect(0, 0, TILE_WIDTH, TILE_HEIGHT)

  ctx.drawImage(_canvas, dx, dy)
}
