import { css } from 'cssed/macro'

const styles = css`
  .technicalSkills {
    margin-top: 40px;
    margin-left: 10px;
  }

  .title {
    font-weight: 500;
    font-size: 25px;
  }

  .categories {
    margin-left: 55px;
  }

  .categories div {
    font-size: 18px;
    font-weight: 400;
    margin: 10px 0;
  }

  .categories div span {
    font-weight: 500;
  }

  @media screen and (max-width: 900px) {
    .categories {
      margin-left: 16px;
    }
  }
`

const TechnicalSkills = () => (
  <div className={styles.technicalSkills}>
    <h2 className={styles.title}>⚙️&nbsp;Technical skills</h2>
    <div className={styles.categories}>
      <div>
        🌈 &nbsp;Front-end:{' '}
        <span>
          HTML/CSS/JS, React, Typescript, NextJS, Redux, {'<canvas>'}, JQuery,
          @grammarly/focal (reactive state), Bootstrap
        </span>
      </div>
      <div>
        🎛️ &nbsp;Back-end:{' '}
        <span>
          Express, NestJS, Socket.IO (web sockets), SQL Databases (MySQL,
          PostgreSQL), NoSQL Databases (Redis, MongoDB), Pug, AWS, Docker &
          Docker Compose, Caddy, Chat-bot Development, Telegram User Bots
          (MTProto) TypeORM, Auth (jwt, passport etc.)
        </span>
      </div>
      <div>
        📗 &nbsp;Other:{' '}
        <span>
          Git, Cron, RxJS (reactive programming), ESLint, prettier, puppeteer
        </span>
      </div>
    </div>
  </div>
)

export default TechnicalSkills
