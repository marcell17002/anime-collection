/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from './styles'

const ModalList = ({ onClickCancel, onClickClose, onClickSave, value, setValue, info, placeholder }) => {
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
                        <button css={styles.buttonCancel} onClick={onClickCancel}>
                            Cancel
                        </button>
                        <button css={styles.buttonSave} onClick={onClickSave}>
                            <p>Save</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalList