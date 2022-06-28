/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Gap = ({height,width}) => {
    const gap = css({
        height,
        width
    })
  return (
    <div css={gap}/>
  )
}

export default Gap