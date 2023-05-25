import { css } from 'cssed/macro'

const styles = css`
  .info {
    margin-top: 20px;
    margin-left: 10px;
  }

  .title {
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 15px;
  }

  .items {
    margin-left: 55px;
  }

  .items div {
    font-size: 18px;
    font-weight: 400;
    margin: 5px 0;
  }

  @media screen and (max-width: 900px) {
    .items {
      margin-left: 16px;
    }
  }
`

const OtherInfo = () => (
  <div className={styles.info}>
    <h2 className={styles.title}>ℹ️️&nbsp;Other info</h2>
    <div className={styles.items}>
      <div>
        🏆 &nbsp;Contributor in crypto & AI projects and an active participant in
        non-commercial volunteer projects.
      </div>
      <br />
      <div>
        ⭐️ &nbsp;Proactive and responsible team player, never afraid to seem
        inexperienced or admit my own mistakes. Values learning abilities over
        knowledge, transparency over assumptions, and awareness over ignorance.
      </div>
    </div>
  </div>
)

export default OtherInfo
