/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { colors } from '../../utils'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const body = css({
    position: 'relative',
})

const main = css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'

})

const container = css({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: 1248,
    padding: '0px 20px',
    marginTop: 70
})

const iconCheck = css({
    color: 'red',
    fontSize: 20
})

const animeList = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',

})

const buttonLoadMore = css({
    marginTop: 20,
    [mq[0]]: {
        alignSelf: 'center',
        marginTop: 50,
        width: 400,
    }
})


const listBundle = css({
    display: 'flex',
    flexDirection: 'column'
})

const textTitleList = css({
    margin: 0,
    color: colors.primaryBlack,
    fontSize: 24,
    [mq[0]]: {
        fontSize: 32
    }
})

const textDescList = css({
    margin: 0,
    color: colors.secondaryGrey,
    paddingTop: 10,
    paddingBottom: 40,
    width: '100%',
    [mq[0]]: {
        width: '50%'

    }
})

export const styles = {
    body,
    main,
    container,
    iconCheck,
    animeList,
    buttonLoadMore,
    listBundle,
    textTitleList,
    textDescList,
}