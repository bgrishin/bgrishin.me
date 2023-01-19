import { css } from 'cssed/macro'

const styles = css`
  .spinner {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #d0d0d0 94%, #0000) top/3.8px
        3.8px no-repeat,
      conic-gradient(#0000 30%, #d0d0d0);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 3.8px),
      #000 0
    );
    animation: spinner-c7wet2 1.2s infinite linear;
  }

  @keyframes spinner-c7wet2 {
    100% {
      transform: rotate(1turn);
    }
  }
`

const Loading = () => <div className={styles.spinner} />

export default Loading
