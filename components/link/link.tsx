import { css } from 'cssed/macro'
import { FC } from 'react'

const styles = css`
  .link {
    text-decoration: none;
    color: white;
    background: #000000;
    padding: 7px 10px;
    font-weight: 400;
    font-size: 17px;
    letter-spacing: -0.1px;
    border-radius: 5px;
    /*box-shadow: 3px 3px 20px 3px #2a2a2a45;*/
    transition: 0.2s;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    white-space: nowrap;
    user-select: none;
  }

  .link svg {
    margin-right: 5px;
    height: 20px;
    width: 20px;
    fill: white;
  }

  .link:not(.secondary):hover {
    background: #3b3b3b;
  }

  .secondary {
    color: #000000;
    background: white;
  }
`

const LinkButton: FC<{
  href: string
  children: string
  icon?: React.ReactElement
  secondary?: boolean
}> = ({ href, children, icon, secondary }) => (
  <a
    href={href}
    className={`${styles.link} ${secondary ? styles.secondary : ''}`}
    target={'_blank'}
    rel="noreferrer"
  >
    {icon}
    <span>{children}</span>
  </a>
)

export default LinkButton
