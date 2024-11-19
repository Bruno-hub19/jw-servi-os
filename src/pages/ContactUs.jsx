import { FiMail, FiPhone } from 'react-icons/fi'

import { Header } from '../components/Header'

import styles from '../styles/ContactUs.module.css'

export const ContactUs = () => (
    <div>
        <Header />
        <div className={styles.mainTextContainer} >
            <h1 className={styles.mainTittle}>Contate nos!</h1>
            <p>Saiba onde nos encontrar</p>
            <div className={styles.gridContactContainer}>
            <div>
                <h1><FiMail /> E-mail</h1>
                <span>comercial@jwserviços.com</span>
            </div>
            <div>
                <h1><FiPhone /> Celular (WhatsApp)</h1>
                <span>(41) 99999-0000</span>
            </div>
        </div>
        </div>
    </div>
)