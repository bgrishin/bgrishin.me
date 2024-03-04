import { css } from 'cssed/macro'
import { FC } from 'react'
import { Links } from '../../common/types/links.enum'
import { RedirectIcon } from '../icons/icons'
import LinkButton from '../link/link'

const styles = css`
  .image {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    display: block;
    border: 3px solid white;
  }

  .imageWrap {
    position: relative;
    margin-bottom: 5px;
  }

  .header {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .nameBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .name {
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.5px;
    margin-bottom: 5px;
  }

  .description {
    font-size: 20px;
    color: #000000;
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

  .contactMeBlock {
    display: flex;
    gap: 5px;
  }
`

const Header: FC = () => (
  <div className={styles.header}>
    <div className={styles.nameBlock}>
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={'/../../images/bio/me.jpeg'}
          alt={'Just me'}
        />
      </div>
      <div>
        <div className={styles.name}>Bogdan Grishin</div>
        <div className={styles.description}>Full-Stack NodeJS Developer</div>
      </div>
    </div>
    <div className={styles.contactMeBlock}>
      <LinkButton href={Links.cv} secondary={true}>
        CV
      </LinkButton>
      <LinkButton href={Links.mailTo} icon={<RedirectIcon />}>
        Contact me
      </LinkButton>
    </div>
  </div>
)

export default Header
