/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const main = css({
    width: '100%',
    zIndex: 3,
    position: 'fixed',
    backgroundColor: 'white',

})

const header = css({
    display: 'flex',
    padding: '0px 10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2) ',
    [mq[0]]: {
        padding: '0px 20px'
    }

})

const headerLogo = css({
    color: '#3B82F6',
    margin: 0,
    padding: '15px 5px',
    [mq[0]]: {
        padding: '20px 5px'
    }
})

const headerText = css({
    color: '#3B82F6',
    margin: 0,
    fontWeight: 'bold',
    padding: '0px 10px',
    ':hover': {
        color: '#93C5FD',

    }
})

const headerRightPane = css({
    display: 'flex',
    justifyContent: 'flex-end'
})

const navLink = css({
    textDecoration: 'none',

})

export const styles = { main, header, headerLogo, headerText, headerRightPane, navLink }