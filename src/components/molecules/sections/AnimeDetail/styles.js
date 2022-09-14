/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../../../../utils'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)

const styles = {
    information: css({
        display: 'flex',
        flexDirection: 'column',
        [mq[0]]: {
            flexDirection: 'row'
        }
    }),
    imageBundle: css({
        position: 'relative',
    }),
    bundleIconEightTeen: css({
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '20px 20px'
    }),
    iconEightTeen: css({
        color: 'white',
        backgroundColor: colors.primaryError,
        borderRadius: 20,
        height: 'auto',
        padding: 8,
        margin: 0,
    }),
    informationDetail: css({
        paddingTop: 20,
        [mq[0]]: {
            marginLeft: 40,
            paddingTop: 0
        }
    }),
    infoHeader: css({
        display: 'flex',
        justifyContent: 'space-between',
    }),
    infoHeaderChild: css({
        display: 'flex',
    }),
    image: css({
        width: '100%',
        height: 400,
        objectFit: 'cover',
        borderRadius: 20,
        [mq[0]]: {
            height: 550,
            width: 'auto'
        }
    })
    ,
    infoTitleText: css({
        fontSize: 30,
        color: colors.primaryBlack,
        fontWeight: 'bold',
        paddingRight: 25,
        margin: 0,
        [mq[0]]: {
            fontSize: 55,
            paddingRight: 20
        }
    }),
    textGenre: css({
        color: colors.secondaryGrey
    }),
    detailTextGenre: css({
        fontWeight: 'normal'
    }),
    additionalInfo: css({
        display: 'flex',
        marginTop: 10,
        alignContent: 'center',
        p: {
            margin: 0,
            paddingLeft: 5,
            color: colors.primaryGrey,
        },
        [mq[0]]: {
            marginTop: 15
        }
    }),
    iconHeartInActive: css({
        fontSize: 25,
        color: colors.primaryGrey,
        [mq[0]]: {
            fontSize: 30,
        }
    }),
    iconHeartActive: css({
        fontSize: 25,
        color: 'red',
        [mq[0]]: {
            fontSize: 30,
        }
    }),
    category: css({
        display: 'flex',
        flexDirection: 'column',
        [mq[0]]: {
            flexDirection: 'row',
        }
    }),
    detailCategory: css({
        display: 'flex',
        alignItems: 'center',
        padding: '10px 30px 10px 0px',
    }),
    detailCategoryText: css({
        display: 'flex',
        fontSize: 18,
        paddingLeft: 10,
        margin: 0,
    }),
    icon: css({
        fontSize: 20,
        color: colors.primary,
        margin: 0
    }),
    iconBoard: css({
        fontSize: 20,
        color: colors.primary,
        margin: 0
    }),
    iconCLock: css({
        fontSize: 20,
        color: colors.primaryError,
        margin: 0
    }),
    iconCalendar: css({
        fontSize: 20,
        color: colors.primaryWarning,
        margin: 0
    }),
    iconFlag: css({
        fontSize: 20,
        color: colors.primarySuccess,
        margin: 0
    }),
    descriptionText: css({
        paddingTop: 10,
        fontSize: 20,
        color: colors.primaryBlack,
    }),
    button: css({
        width: '100%',
        marginTop: 20,
        [mq[0]]: {
            width: 300
        },
    })
}
export default styles