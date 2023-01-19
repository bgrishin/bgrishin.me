import { css } from 'cssed/macro'
import { FC } from 'react'
import { Links } from '../../common/types/links.enum'
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  TelegramIcon
} from '../icons/icons'
import LinkButton from '../link/link'

const styles = css`
  .image {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background-size: cover;
    margin-right: 20px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 50px;
  }

  .nameBlock {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .name {
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.5px;
  }

  .description {
    font-size: 20px;
    color: #6e6e6e;
  }

  .links {
    position: absolute;
    margin-top: 10px;
  }

  .links svg {
    fill: #6e6e6e;
    height: 20px;
    width: 20px;
    transition: 0.2s;
    margin-right: 5px;
  }

  .links svg:hover {
    fill: #8c8b8b;
  }
`

const Header: FC = () => (
  <div className={styles.header}>
    <div className={styles.nameBlock}>
      <img
        className={styles.image}
        src={'/../../images/bio/me.jpeg'}
        alt={'Just me'}
      />
      <div>
        <div className={styles.name}>Bogdan Grishin</div>
        <div className={styles.description}>Full-Stack NodeJS Developer</div>
        <div className={styles.links}>
          <a href={Links.github} target={'_blank'}>
            <GithubIcon />
          </a>
          <a href={Links.linkedIn} target={'_blank'}>
            <LinkedInIcon />
          </a>
          <a href={Links.telegram} target={'_blank'}>
            <TelegramIcon />
          </a>
          <a href={Links.mailTo} target={'_blank'}>
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.contactMeBlock}>
      <LinkButton href={Links.linkedIn}>Contact me</LinkButton>
    </div>
  </div>
)

export default Header
