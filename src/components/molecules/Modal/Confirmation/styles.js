/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { colors } from '../../../../utils'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    modal: css({
        backgroundColor: 'rgba(0, 0, 0, 0.8);',
        width: '100%',
        height: '100%',
        zIndex: 10,
        top: 0,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center'
    }),
    content: css({
        paddingTop: '20%',
        margin: '0px 16px',
        [mq[0]]: {
            paddingTop: '10%',
            margin: '0px 50px'
        }
    }),
    textHeader: css({
        color: colors.primary,
        fontSize: 18,
        paddingRight: 20,
        [mq[0]]: {
            fontSize: 28
        }

    }),
    inputText: css({
        marginTop: 30,
        border: 0,
        backgroundColor: colors.tertiaryGrey,
        padding: '15px 20px',
        borderRadius: 10,
        fontSize: 16,
        ':focus': {
            outline: 0
        },
        [mq[0]]: {
            fontSize: 20,
            width: '80%',

        }
    }),
    bundleButton: css({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 0px 10px 0px'
    }),
    subContent: css({
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
        borderRadius: 20,
        backgroundColor: colors.secondaryWhite,
        [mq[0]]: {
            width: 600
        }
    }),
    bundleTitle: css({
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center'
    }),
    iconTimes: css({
        fontSize: 24,
        color: 'gray',
        [mq[0]]: {
            fontSize: 30
        }
    }),
    textValue: css({
        textAlign: 'center',
        margin: 0,
        paddingTop: 30
    }),
    textWarning: css({
        fontSize: 20,
        color: colors.secondaryGrey,
        textAlign: 'center'
    })
}
export default styles 