/* global Image */
import drawTile from './drawTile'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './consts'

const mount = document.getElementById('game')
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

mount.appendChild(canvas)

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

const loaded = () => {
  const tiles = makeTransparent(img)
  drawTile(ctx, tiles, 0, 0, 80, 40, '#5667FF', '#222953')
  drawTile(ctx, tiles, 10, 0, 50, 60, '#5667FF', '#222953')
  drawTile(ctx, tiles, 20, 0, 120, 60, '#5667FF', '#222953')
  drawTile(ctx, tiles, 30, 0, 120, 60, '#5667FF', '#222953')
  drawTile(ctx, tiles, 40, 0, 150, 60, '#5667FF', '#222953')
}

const img = new Image()
img.addEventListener('load', loaded, false)
img.src = 'img/tiles.png'

function makeTransparent (image) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const width = image.width
  const height = image.height
  canvas.width = width
  canvas.height = height
  ctx.drawImage(image, 0, 0)
  const imageData = ctx.getImageData(0, 0, width, height)
  const pixels = imageData.data

  for (let i = 0, n = pixels.length; i < n; i += 4) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]

    if (r === 255 && g === 0 && b === 255) {
      pixels[i + 3] = 0
    }
  }

  ctx.putImageData(imageData, 0, 0)

  return canvas
}
