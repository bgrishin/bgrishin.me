interface Color {
  r: number
  g: number
  b: number
}
interface ColorStop {
  pos: number
  colors: Color[]
  currColor: null | string
}

const Anim = {
  //animation settings
  duration: 5000,
  interval: 10,
  stepUnit: 1,
  currUnit: 0
}

class Gradient {
  private ctx: CanvasRenderingContext2D
  private canvas: HTMLCanvasElement
  private window: Window

  private stopAColor: Color[] = [
    { r: 29, g: 151, b: 108 },
    { r: 52, g: 143, b: 80 }
  ]
  private stopBColor: Color[] = [
    { r: 147, g: 249, b: 185 },
    { r: 15, g: 155, b: 15 }
  ]

  private width: number
  private height: number

  private colorStops: ColorStop[] = []
  private currentStop: number = 0

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    window: Window,
    width: number,
    height: number
  ) {
    this.ctx = ctx
    this.canvas = canvas
    this.window = window
    this.width = width
    this.height = height

    this.__updateCanvas()
    this.__animationLoop()

    this.window.addEventListener('resize', () => this.__updateCanvas())
  }

  private rgb = (r: number, g: number, b: number) => `rgb(${r}, ${g}, ${b})`
  private lerp = (a: number, b: number, u: number) => (1 - u) * a + u * b

  private __animationLoop = () => {
    this.window.requestAnimationFrame(this.__animationLoop)
    this.__updateStops()
    this.__draw()
  }

  private __addStop = (pos: number, colors: Color[]) => {
    const stop = { pos: pos, colors: colors, currColor: null }
    this.colorStops.push(stop)
  }

  private __updateStops = () => {
    const steps = Anim.duration / Anim.interval,
      step_u = Anim.stepUnit / steps,
      stopsLength = this.colorStops[0].colors.length - 1

    for (let i = 0; i < this.colorStops.length; i++) {
      let stop = this.colorStops[i],
        startColor = stop.colors[this.currentStop],
        endColor,
        r,
        g,
        b

      if (this.currentStop < stopsLength) {
        endColor = stop.colors[this.currentStop + 1]
      } else {
        endColor = stop.colors[0]
      }

      r = Math.floor(this.lerp(startColor.r, endColor.r, Anim.currUnit))
      g = Math.floor(this.lerp(startColor.g, endColor.g, Anim.currUnit))
      b = Math.floor(this.lerp(startColor.b, endColor.b, Anim.currUnit))

      stop.currColor = this.rgb(r, g, b)
    }

    if (Anim.currUnit >= 1.0) {
      Anim.currUnit = 0
      if (this.currentStop < stopsLength) {
        this.currentStop++
      } else {
        this.currentStop = 0
      }
    }

    Anim.currUnit += step_u
  }

  private __draw = () => {
    const gradient = this.ctx.createLinearGradient(
      0,
      this.width,
      this.height,
      0
    )

    for (let i = 0; i < this.colorStops.length; i++) {
      const stop = this.colorStops[i],
        pos = stop.pos
      let color = stop.currColor

      if (!color) color = this.rgb(255, 255, 255)

      gradient.addColorStop(pos, color)
    }

    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = gradient
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  private __updateCanvas = () => {
    const width = this.window.innerWidth,
      height = this.window.innerHeight

    this.canvas.width = width
    this.canvas.height = height

    this.width = width
    this.height = height

    // min - 0, max - 1
    this.__addStop(0, this.stopAColor)
    this.__addStop(1, this.stopBColor)
  }
}

export default Gradient
