/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Buttons from '../../../atoms/Buttons'
import styles from './styles'

const ModalInput = ({ onClickCancel, onClickClose, onClickSave, value, setValue, info, placeholder }) => {
    return (
        <div css={styles.modal}>
            <div css={styles.content}>
                <div css={styles.subContent}>
                    <div css={styles.bundleTitle}>
                        <h2 css={styles.textHeader}>Check Your Collection Title</h2>
                        <FontAwesomeIcon icon="times" css={styles.iconTimes} onClick={onClickClose} />
                    </div>
                    <input type="text" css={styles.inputText} onChange={setValue} value={value} placeholder={placeholder} />
                    <p css={styles.textInfo}>{info}</p>
                    <div css={styles.bundleButton}>
                        <Buttons type="error" label="cancel" onClick={onClickCancel} />
                        <Buttons label="Save" onClick={onClickSave} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInput