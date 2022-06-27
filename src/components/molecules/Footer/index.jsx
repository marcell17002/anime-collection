/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styles } from './styles'
const Footer = () => {
    return (
        <div css={styles.footer}>
            <p css={styles.textFooter}>Designed and Developed by Marcell Antonius</p>
            <div css={styles.footerInfo}>
                <a target="_blank" href="https://github.com/marcell17002">
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'github']}></FontAwesomeIcon>
                </a>
                <a target="_blank" href="https://www.instagram.com/arntonius/">
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'instagram']}></FontAwesomeIcon>
                </a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=62895401011469&text=%20Hello%20Marcell,%20I%20just%20want%20to%20know%20about%20you!.">
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'whatsapp']}></FontAwesomeIcon>
                </a>
                <a target="_blank" href="https://linkedin.com/in/marcell-antonius">
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'linkedin']}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    )
}

export default Footer