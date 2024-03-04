import { css } from 'cssed/macro'

const styles = css`
  .info {
    margin-top: 10px;
    border: 1px solid #d7d7d7;
    padding: 10px;
    border-radius: 10px;
  }

  @media screen and (max-width: 900px) {
    .info {
      margin: 0 10px;
      margin-top: 10px;
    }
  }
`

const OtherInfo = () => (
  <>
    <div className={styles.info}>
      🏆 Contributor in crypto & health care & AI projects and an active
      participant in non-commercial volunteer projects.
    </div>
    <div className={styles.info}>
      ⭐️ Proactive and responsible team player, never afraid to seem
      inexperienced or admit my own mistakes. Values learning abilities over
      knowledge, transparency over assumptions, and awareness over ignorance.
    </div>
  </>
)

export default OtherInfo
