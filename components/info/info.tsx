import { css } from 'cssed/macro'

const styles = css`
  .info {
    margin-top: 40px;
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
    margin: 3px 0;
  }

  .items div span {
    font-weight: 500;
  }

  @media screen and (max-width: 900px) {
    .items {
      margin-left: 16px;
    }
  }
`

const Info = () => (
  <div className={styles.info}>
    <h2 className={styles.title}>📝️&nbsp;Short info</h2>
    <div className={styles.items}>
      <div>
        🌎 &nbsp;Location: <span>Flexible</span>
      </div>
      <div>
        ⏳ &nbsp;Years of experience:{' '}
        <span>
          2{' '}
          year(s) of commercial experience
        </span>
      </div>
      <div>
        🇬🇧 &nbsp;Languages: <span>English (B2), Russian (Native), Ukrainian (Native)</span>
      </div>
      {/*<div>*/}
      {/*  🐣 &nbsp;Birthday: <span>2007, 5 of May</span>*/}
      {/*</div>*/}
      <br />
      <div>
        💻 &nbsp;Currently coding on <span>MacBook Air M1 2020</span>
      </div>
      <br />
      <div>
        ⏭️ &nbsp;In plans or in development: <span>Full-stack chat application, AI Experiments, Blockchain experiments (maybe)</span>
      </div>
      <br />
      {/*<div>*/}
      {/*  📞 &nbsp;Contact me via email <span>bogdan.grishin.2007@gmail.com</span> or Telegram{' '}<span>@quartz555</span>*/}
      {/*</div>*/}
    </div>
  </div>
)

export default Info
