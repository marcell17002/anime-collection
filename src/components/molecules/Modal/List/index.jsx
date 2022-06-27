/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { styles } from './styles'
const ModalInput = ({ onCLickCancel, onCLickClose, onCLickSave, items, value, setValue, emitId }) => {

    const [isActive, setIsActive] = useState(false)
    const [id, setId] = useState()

    const handleEmit = (id) => {
        setId(id)
        emitId(id)
        setIsActive(!isActive)
    }

    return (
        <div css={styles.modal}>
            <div css={styles.content}>
                <div css={styles.subContent}>
                    <div css={styles.bundleTitle}>
                        <h2 css={styles.textHeader}>Check Your Collection Title</h2>
                        <FontAwesomeIcon icon="times" css={styles.iconTimes} onClick={onCLickClose} />
                    </div>
                    <div>
                        {items.map((item, key) => <div key={key} css={isActive && id === item.id ? styles.textListActive : styles.textListInActive} onClick={() => handleEmit(item.id)}>{item.id}</div>)}
                        <input type="text" css={styles.inputText} onChange={setValue} value={value} placeholder="collection title" />
                    </div>
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