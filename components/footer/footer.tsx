import { css } from 'cssed/macro'

const styles = css`
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6e6e6e;
    margin: 20px 0;
  }
`

const Footer = () => (
  <div className={styles.footer}>
    © {new Date().getFullYear()} Bogdan Grishin
  </div>
)

export default Footer
