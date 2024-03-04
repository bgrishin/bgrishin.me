import { css } from 'cssed/macro'
import Head from 'next/head'
import { FC } from 'react'
import CanvasGradient from '../components/canvas-gradient/canvas-gradient'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Info from '../components/info/info'
import OtherInfo from '../components/other-info/other-info'
import Projects from '../components/projects/projects'
import TechnicalSkills from '../components/tech-skills/tech-skills'

const styles = css`
  .content {
    padding: 0 20%;
    position: relative;
    top: -80px;
    z-index: 3;
  }

  @media screen and (max-width: 900px) {
    .content {
      padding: 0;
    }
  }
`

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title translate={'no'}>Bogdan Grishin</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="NodeJS Full-Stack Developer" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CanvasGradient />
      <div className={styles.content}>
        <Header />
        <Info />
        <TechnicalSkills />
        <OtherInfo />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
