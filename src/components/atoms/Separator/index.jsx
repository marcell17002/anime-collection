/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../../../utils/colors';

const Separator = ({ width }) => {
  const separator = css({
    backgroundColor: colors.primary,
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