/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../../../../utils'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const bundleCollection = css({
    margin: '0px 16px',
    [mq[0]]: {
        margin: '0px 20px',

    }
})

const headerList = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const buttonExplore = css({
    color: colors.primary,
    textDecoration: 'none',
    marginLeft: 20,
    ':hover': {
        color: colors.secondary
    },
    h3: {
        fontSize: 16,
        [mq[0]]: {
            fontSize: 20,
            paddingTop: 6
        }
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
    margin: 0,
    [mq[0]]: {
        fontSize: 30
    }
})

const mainAction = css({
    display: 'flex',
    alignItems: 'center'
})

const iconPen = css({
    fontSize: 12,
    backgroundColor: colors.primaryWarning,
    color: 'white',
    padding: 7,
    borderRadius: 20,
    ':hover': {
        backgroundColor: colors.secondaryWarning,
    },
    [mq[0]]: {
        padding: 8,
        fontSize: 16,
    }
})

const iconTrash = css({
    fontSize: 12,
    backgroundColor: colors.primaryError,
    color: 'white',
    padding: 7,
    borderRadius: 20,
    ':hover': {
        backgroundColor: colors.secondaryError,
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