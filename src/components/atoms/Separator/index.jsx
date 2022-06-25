/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Separator = ({ width }) => {
  const separator = css({
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    height: 5,
    margin: '10px 0px',
    width
  })
  return (
    <div css={separator} />
  )
}

export default Separator