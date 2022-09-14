/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Buttons from '../../../atoms/Buttons'
import styles from './styles'

const ModalConfirmation = ({ onClickCancel, onClickClose, onClickSave, value }) => {
    return (
        <div css={styles.modal}>
            <div css={styles.content}>
                <div css={styles.subContent}>
                    <div css={styles.bundleTitle}>
                        <h2 css={styles.textHeader}>Are You Sure ?</h2>
                        <FontAwesomeIcon icon="times" css={styles.iconTimes} onClick={onClickClose} />
                    </div>
                    <h1 css={styles.textValue}>{value}</h1>
                    <p css={styles.textWarning}>you will delete this item from your collection list</p>
                    <div css={styles.bundleButton}>
                        <Buttons type="error" label="cancel" onClick={onClickCancel} />
                        <Buttons label="delete" onClick={onClickSave} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmation