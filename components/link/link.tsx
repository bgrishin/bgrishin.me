import { css } from 'cssed/macro'
import { RedirectIcon } from '../icons/icons'
import { FC } from 'react'

const styles = css`
  .link {
    text-decoration: none;
    color: white;
    background: #0080ff;
    padding: 7px 20px;
    font-weight: 400;
    font-size: 17px;
    letter-spacing: -0.1px;
    border-radius: 10px;
    /*box-shadow: 3px 3px 20px 3px #2a2a2a45;*/
    transition: 0.2s;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .link svg {
    margin-right: 5px;
    height: 20px;
    width: 20px;
    fill: white;
  }

  .link:hover {
    background: #0170de;
  }

  @media screen and (max-width: 900px) {
    .link span {
      display: none;
    }
  }
`

const LinkButton: FC<{ href: string; children: string }> = ({
  href,
  children
}) => (
  <a href={href} className={styles.link} target={'_blank'} rel="noreferrer">
    <RedirectIcon />
    <span>{children}</span>
  </a>
)

export default LinkButton
