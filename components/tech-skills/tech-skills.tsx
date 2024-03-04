import { css } from 'cssed/macro'

const styles = css`
  .title {
    font-weight: 400;
    letter-spacing: -1px;
    font-size: 25px;
    text-align: center;
    user-select: none;
  }

  @media screen and (max-width: 900px) {
    .technicalSkills {
      margin: 0 10px;
    }

    .categories {
      flex-wrap: wrap;
    }
  }

  .categories {
    display: flex;
    width: 100%;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .category {
    width: 100%;
    border: 1px solid #d7d7d7;
    padding: 10px;
    border-radius: 10px;
  }

  .category h2 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    user-select: none;
  }

  .category .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .badge {
    background: #ececec;
    color: #000000;
    border-radius: 4px;
    font-size: 14px;
    padding: 5px 10px;
    text-align: center;
    font-weight: 500;
    transition: 0.2s;
  }

  .badge:hover {
    background: #cccccc;
  }
`

const TechnicalSkills = () => (
  <div className={styles.technicalSkills}>
    <h2 className={styles.title}>Technical skills</h2>
    <div className={styles.categories}>
      <div className={styles.category}>
        <h2>🌈 Front-end</h2>
        <span className={styles.badges}>
          {`HTML/CSS/JS, ReactJS, Typescript, NextJS, Redux, JQuery, @grammarly/focal (reactive state), Bootstrap, ViteJS, SolidJS, Canvas Drawing, Tailwind`
            .split(', ')
            .map((x, i) => (
              <span className={styles.badge} key={i}>
                {x}
              </span>
            ))}
        </span>
      </div>
      <div className={styles.category}>
        <h2>🎛️ Back-end</h2>
        <span className={styles.badges}>
          {`Express, NestJS, Socket.IO & Web sockets, SQL Databases (MySQL，
          PostgreSQL), NoSQL Databases (Redis，MongoDB), Pug, EJS, AWS Services,
          Docker & Docker Compose, Caddy, Chat-bot Development, Telegram User
          Bots (MTProto), TypeORM, Auth (jwt，passport，basic etc.), OpenAPI
          (Swagger), Sequelize, TypeORM, Prisma, Fastify, Linux, SSH, Bash,
          DevOps, Certbot, Nginx, Event sourcing / CQRS, E2E tests (Jest), BullMQ`
            .replaceAll('\n', '')
            .split(', ')
            .map((x, i) => (
              <span className={styles.badge} key={i}>
                {x}
              </span>
            ))}
        </span>
      </div>
    </div>
    <div className={styles.category}>
      <h2>📗 Common skills</h2>
      <span className={styles.badges}>
        {`Git, RxJS (reactive programming), puppeteer,
          OpenAI API, Google APIs, SOLID, Jira, Slack, Figma, Postman`
          .replaceAll('\n', '')
          .split(', ')
          .map((x, i) => (
            <span className={styles.badge} key={i}>
              {x}
            </span>
          ))}
      </span>
    </div>
  </div>
)

export default TechnicalSkills
