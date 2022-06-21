/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const paragraph = css({
    color: 'hotpink',
    '&header': {
        color: 'red'
    }
})

const Test = () => {

    return (
        <div>
            <header>
                <p css={paragraph}>
                    This is green since it's inside a header
                </p>
            </header>
            <p css={paragraph}>
                This is turquoise since it's not inside a header.
            </p>
        </div>
    )
}

export default Test