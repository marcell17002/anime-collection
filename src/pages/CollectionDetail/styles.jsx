/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const body = css({
    position: 'relative'
})

const main = css({
    display: 'flex',
    minHeight: '100vw',
    flexDirection: 'column',
    'h1,h3,p': {
        margin: 0
    }
})

const container = css({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1248,
    [mq[0]]: {
        paddingTop: 30,
    },
})
const headerList = css({
    display: 'flex',
    alignItems: 'start',
    marginTop: 100,
    padding: '0px 20px',

})

const buttonAction = css({
    border: 0,
    backgroundColor: 'transparent',
})

const mainTitle = css({
    display: 'flex',
    flexDirection: 'column',
})

const iconPen = css({
    fontSize: 12,
    backgroundColor: '#9CA3AF',
    color: 'white',
    padding: 7,
    marginLeft: 10,
    borderRadius: 20,
    [mq[0]]: {
        padding: 8,
        fontSize: 16,
    },
    ':hover': {
        backgroundColor: '#FACC15'
    }
})

const inputTitle = css({
    border: 0,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
    padding: '15px 0px',
    ':focus': {
        border: 0,
        outline: 0,
    },
    [mq[0]]: {
        fontSize: 30
    }
})

const animeList = css({
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0px 20px',
    maxWidth: 1248,
    justifyContent: 'space-between',

})

const textEditInfo = css({
    fontStyle: 'italic',
    fontSize: 12,
    color: 'gray',

})

const textTitle = css({
    fontSize: 30,
    color: '#3B82F6',
    [mq[0]]: {
        fontSize: 40
    }
})

export const styles = {
    body,
    main,
    container,
    headerList,
    buttonAction,
    mainTitle,
    iconPen,
    inputTitle,
    animeList,
    textEditInfo,
    textTitle
}