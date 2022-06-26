/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const main = css({
    width: '100%',
    zIndex: 3,
    position: 'fixed',
    backgroundColor: 'white',

})

const header = css({
    display: 'flex',
    padding: '0px 20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2) ',

})

const headerLogo = css({
    color: '#3B82F6',
    margin: 0,
    padding: '20px 5px'
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