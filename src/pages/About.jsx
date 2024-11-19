import { Header } from '../components/Header'

import styles from '../styles/About.module.css'

export const About = () => (
    <div>
        <Header />
        <div className={styles.mainTextContainer} >
            <h1>Sobre a empresa</h1>
            <p>Conheça a nossa história</p>
        </div>
        <div className={styles.gridTextContainer}>
            <div>
                <h1>Desde 2003 a JW atende ao mercado com excelência</h1>
            </div>
            <div>
                <p>Com a experiência adquirida ao longo de sua história a JW desenvolveu um sistema de gestão e uma estrutura empresarial altamente eficiente, capaz de assegurar a excelência do desempenho operacional e  criar um ambiente propício para buscar constantemente aprimoramento técnico. Fundada em 2003, a JW surgiu para proporcionar ao mercado uma nova opção em enlonamento e amarração. Hoje, a empresa atua com base na decisão estratégica de integrar atividades.</p>
            </div>
        </div>
    </div>
)