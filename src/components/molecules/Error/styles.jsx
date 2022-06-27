/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const information = css({
    backgroundColor: '#F5F5F4',
    padding: 20,
    borderRadius: 30,
    margin: '0px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    'h2,p': {
        textAlign: 'center'
    }
})

const imageInformation = css({
    width: 200,
    height: 200
})

export const styles = {
    information,
    imageInformation
}