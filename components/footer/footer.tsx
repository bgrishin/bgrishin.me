import { css } from 'cssed/macro'
import { CODE_TEXT } from '../../common/code-text'
import { Links } from '../../common/types/links.enum'
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  TelegramIcon
} from '../icons/icons'

const styles = css`
  .code_gradient {
    width: 100%;
    color: #6e6e6e;
    margin: 20px 0;
    position: absolute;
    height: 200px;
    overflow: hidden;
    left: 0;
    text-align: justify;
    letter-spacing: -2.5px;
    font-size: 14px;
    background: linear-gradient(to right, #c400ff, #ff0cba, #ff8e1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: 'Ubuntu Mono', monospace;
    font-weight: 700;
    font-style: normal;
  }

  .code_gradient::after {
    content: '';
    display: inline-block;
    width: 100%;
  }

  .code_gradient::before {
    content: '';
    width: 100%;
    height: calc(100% + 100px);
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(to bottom, white, transparent);
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
  }

  .links {
    display: flex;
    gap: 10px;
  }

  .separator {
    content: '';
    background: black;
    width: 150px;
    margin: 20px 0;
    height: 2px;
  }

  .links a {
    padding: 10px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links svg {
    fill: #000000;
    height: 25px;
    width: 25px;
    transition: 0.2s;
  }

  .links a:hover svg {
    fill: #ffffff;
  }

  .links a:hover {
    background: #000000;
  }
`

const Footer = () => (
  <>
    <div className={styles.footer} translate={'no'}>
      <div className={styles.links}>
        <a href={Links.github} target={'_blank'} rel="noreferrer">
          <GithubIcon />
        </a>
        <a href={Links.linkedIn} target={'_blank'} rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href={Links.telegram} target={'_blank'} rel="noreferrer">
          <TelegramIcon />
        </a>
        <a href={Links.mailTo} target={'_blank'} rel="noreferrer">
          <EmailIcon />
        </a>
      </div>
      <div className={styles.separator} />
      <div>© {new Date().getFullYear()} Bogdan Grishin</div>
    </div>
    <div className={styles.code_gradient} translate={'no'}>
      {CODE_TEXT.split('').filter(Boolean).join(' ')}
    </div>
  </>
)

export default Footer
