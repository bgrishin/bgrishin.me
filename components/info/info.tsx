import { css } from 'cssed/macro'
import { FC } from 'react'

const styles = css`
  .infoWrap {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
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
    .info {
      flex-wrap: wrap;
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 1040px) {
    .languages {
      flex-wrap: wrap;
    }
  }

  .infoBlock {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    transition: 0.2s;
  }

  .infoBlock:hover {
    border: 1px solid black;
  }

  .infoBlock .content .label {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  .infoBlock .icon {
    font-size: 40px;
    margin-right: 10px;
  }

  .infoBlock .text {
    font-size: 14px;
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

const InfoBlock: FC<{
  icon?: string
  label: string
  info: string
}> = ({ icon, label, info }) => (
  <div className={styles.infoBlock}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.content}>
      <div className={styles.label}>{label}</div>
      <div className={styles.text}>{info}</div>
    </div>
  </div>
)

const Info = () => (
  <div className={styles.infoWrap}>
    <div className={styles.info}>
      <InfoBlock icon={'🌎'} label={'Location'} info={'Warsaw, Poland'} />
      <InfoBlock
        icon={'⏳'}
        label={'Years of Experience'}
        info={'2.5 years of commercial experience'}
      />
      <InfoBlock
        icon={'💻'}
        label={'Currently Coding on'}
        info={'Macbook Pro 14" M2 Pro 2023'}
      />
    </div>
    <div className={`${styles.info} ${styles.languages}`}>
      <InfoBlock label={'Ukrainian'} info={'Native'} />
      <InfoBlock label={'English'} info={'B2 (Upper Intermediate)'} />
      <InfoBlock label={'Polish'} info={'A2 (Elementary)'} />
      <InfoBlock label={'Russian'} info={'Native'} />
    </div>
  </div>
)

export default Info
