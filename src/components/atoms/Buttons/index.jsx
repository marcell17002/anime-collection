/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles'

const Buttons = ({ onClick, label, type, iconName }) => {
    const ButtonSelector = () => {
        switch (type) {
            case 'default': return (
                <button css={styles.btnDefault} onClick={onClick}>{label}</button>
            )
            case 'success': return (
                <button css={styles.btnSuccess} onClick={onClick}>{label}</button>
            )
            case 'error': return (
                <button css={styles.btnError} onClick={onClick}>{label}</button>
            )
            case 'rounded': return (
                <button css={styles.btnRounded} onClick={onClick}>{label}</button>
            )
            case 'icon-right': return (
                <button css={styles.btnIconRight} onClick={onClick}>
                    <p css={styles.textBtnIconRight}>{label}</p>
                    <FontAwesomeIcon icon={iconName} css={styles.iconChevronRight}></FontAwesomeIcon>
                </button>
            )

            default: return (
                <button css={styles.btnDefault} onClick={onClick}>{label}</button>
            )
        }
    }
    return (
        <div css={styles.mainButton}>
            <ButtonSelector />
        </div>
    )
}

export default Buttons