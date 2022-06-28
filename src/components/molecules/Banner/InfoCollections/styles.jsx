/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { colors } from '../../../../utils/colors'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const bannerCollections = css({
    backgroundColor: colors.tertiaryGrey,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 40px',
    borderRadius: 30,
    flexDirection: 'column',
    [mq[0]]: {
        flexDirection: 'row',
        padding: '50px 60px',
    }
})

const bundleInfoCollections = css({
    [mq[0]]: {
        width: '60%'
    }
})

const button = css({
    marginTop: 50,
    width: '100%',
    [mq[0]]: {
        marginTop: 20,
        width: 'auto'
    }
})

const textHeaderCollections = css({
    margin: 0
})

const textDescCollections = css({
    margin: 0,
    fontSize: 18,
    paddingTop: 15
})

export const styles = {
    bannerCollections,
    bundleInfoCollections,
    textHeaderCollections,
    textDescCollections,
    button
}