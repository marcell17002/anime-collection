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
        paddingTop: 70,
    },
})

const bundle = css({
    padding: '0px 16px',
    marginTop: 80,
    [mq[0]]: {
        marginTop: 30
    }
})

export const styles = {
    body,
    main,
    container,
    bundle
}
