import {FaGithub , FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://github.com/hugovit9' target='_blank' rel="noreferrer"><FaGithub ></FaGithub ></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/vitrocha/' target='_blank' rel="noreferrer"><FaLinkedin></FaLinkedin></a>
                </li>
            </ul>
            <p className={styles.desenvolvido}>Desenvolvido por Vitor Rocha</p>
        </footer>
    )
}

export default Footer