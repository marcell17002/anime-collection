/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from './styles'

const ModalInput = ({ onCLickCancel, onCLickClose, onCLickSave }) => {
    return (
        <div css={styles.modal}>
            <div css={styles.content}>
                <div css={styles.subContent}>
                    <div css={styles.bundleTitle}>
                        <h2 css={styles.textHeader}>Check Your Collection Title</h2>
                        <FontAwesomeIcon icon="times" css={styles.iconTimes} onClick={onCLickClose} />
                    </div>
                    <input type="text" css={styles.inputText} placeholder="collection title" />
                    <div css={styles.textList}>my supper collections</div>
                    <div css={styles.bundleButton}>
                        <button css={styles.buttonCancel} onClick={onCLickCancel}>
                            Cancel
                        </button>
                        <button css={styles.buttonSave} onClick={onCLickSave}>
                            <p>Save</p>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModalInput