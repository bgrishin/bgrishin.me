import { css } from 'cssed/macro'
import { FC, useEffect, useRef } from 'react'
import Gradient from './gradient-class'

const styles = css`
  .canvas {
    height: 200px;
    width: 100%;
    display: block;
  }

  .canvasWrap::after {
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    height: 200px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 1)
    );
    z-index: 3;
  }

  .canvasWrap {
    margin-bottom: 30px;
  }
`

const CanvasGradient: FC = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!
    const context = canvas.getContext('2d')!

    new Gradient(context, canvas, window, window.innerWidth, window.innerHeight)
  }, [])

  return (
    <div className={styles.canvasWrap}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}

export default CanvasGradient
