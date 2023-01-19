import { FC } from 'react'
import { css } from 'cssed/macro'
import Head from 'next/head'
import CanvasGradient from '../components/canvas-gradient/canvas-gradient'
import Header from '../components/header/header'
import TechnicalSkills from '../components/tech-skills/tech-skills'
import Info from '../components/info/info'
import OtherInfo from '../components/other-info/other-info'
import Projects from '../components/projects/projects'
import Footer from '../components/footer/footer'

const styles = css`
  .content {
    padding: 0 20%;
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
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
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
