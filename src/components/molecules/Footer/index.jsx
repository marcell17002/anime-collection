/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles'
const Footer = () => {
    const linkGithub = 'https://github.com/marcell17002'
    const linkInstagram = 'https://www.instagram.com/arntonius/'
    const linkWhatsapp = 'https://api.whatsapp.com/send?phone=62895401011469&text=%20Hello%20Marcell,%20I%20just%20want%20to%20know%20about%20you!.'
    const linkLinkedin = 'https://linkedin.com/in/marcell-antonius'
    return (
        <div css={styles.footer}>
            <p css={styles.textFooter}>Designed and Developed by Marcell Antonius</p>
            <div css={styles.footerInfo}>
                <a target="_blank" href={linkGithub}>
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'github']}></FontAwesomeIcon>
                </a>
                <a target="_blank" href={linkInstagram}>
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'instagram']}></FontAwesomeIcon>
                </a>
                <a target="_blank" href={linkWhatsapp}>
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'whatsapp']}></FontAwesomeIcon>
                </a>
                <a target="_blank" href={linkLinkedin}>
                    <FontAwesomeIcon css={styles.iconInfo} icon={['fab', 'linkedin']}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    )
}

export default Footer