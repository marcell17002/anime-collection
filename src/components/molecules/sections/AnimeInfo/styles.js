/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { colors } from '../../../../utils/colors'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    topPick: css({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '40px 0px',
        [mq[0]]: {
            margin: '80px 0px'
        }

    }),
    topPickInfo: css({
        marginTop: '5%',
        width: '100%'
    }),
    topImageBundles: css({
        display: 'none',
        position: 'relative',
        marginRight: 50,
        [mq[0]]: {
            display: 'block'
        }
    }),
    image: css({
        width: 400,
        height: 400,
        borderRadius: 20,
        objectFit: 'cover',
        opacity: 0.4
    }),
    imageMobile: css({
        width: '100%',
        borderRadius: 20,
        height: 400,
        objectFit: 'cover',
        [mq[0]]: {
            display: 'none'
        }
    }),
    imageHorizontal: css({
        width: 400,
        height: 250,
        borderRadius: 20,
        objectFit: 'cover',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 30
    }),
    textTitle: css({
        fontSize: 30,
        margin: 0,
        color: colors.primaryBlack,
        [mq[0]]: {
            fontSize: 45,
            paddingRight: 100,
        }
    }),
    textGenres: css({
        fontSize: 17,
        fontWeight: 'normal',
        color: colors.secondaryGrey,
        [mq[0]]: {
            fontSize: 20,
        }

    }),
    buttonDetail: css({
        [mq[0]]: {
            width: 300
        }
    })

}
export default styles