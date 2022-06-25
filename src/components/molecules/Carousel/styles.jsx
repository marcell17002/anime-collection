/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const bundleCollection = css({
    margin: '0px 16px',
    [mq[0]]: {
        margin: 0
    }
})

const headerList = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const buttonExplore = css({
    color: '#3B82F6',
    textDecoration: 'none',
    marginLeft: 20,
    display: 'none',
    [mq[0]]: {
        display: 'block'
    }
})

const buttonAction = css({
    border: 0,
    backgroundColor: 'transparent'
})
const mainTitle = css({
    display: 'flex',
    alignItems: 'center'
})

const textTitle = css({
    fontSize: 20,
    [mq[0]]: {
        fontSize: 24
    }
})

const mainAction = css({
    display: 'flex',
    alignItems: 'center'
})

const iconPen = css({
    fontSize: 12,
    backgroundColor: '#9CA3AF',
    color: 'white',
    padding: 6,
    borderRadius: 20,
    ':hover': {
        backgroundColor: '#FACC15',
    },
    [mq[0]]: {
        padding: 8,
        fontSize: 16,
    }
})

const iconTrash = css({
    fontSize: 12,
    backgroundColor: '#9CA3AF',
    color: 'white',
    padding: 6,
    borderRadius: 20,
    ':hover': {
        backgroundColor: '#F87181',
    },
    [mq[0]]: {
        padding: 8,
        fontSize: 16,
    }
})

export const styles = {
    bundleCollection,
    headerList,
    buttonExplore,
    buttonAction,
    mainTitle,
    textTitle,
    mainAction,
    iconPen,
    iconTrash,
}