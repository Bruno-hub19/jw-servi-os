import { Link } from 'react-router-dom'

import styles from '../styles/Cover.module.css'
import TruckBackground from '../assets/truck-background.svg'

export const Cover = () => (
    <div>
        <div className={styles.imageContainer} >
            <img className={styles.cover} src={TruckBackground} />
            <div className={styles.textContainer} >
                <h1>Focamos em oferecer</h1>
                <h1>Profissionalismo e excelência.</h1>
                <p>Mais do que o simples atendimento dos requisitos exigidos pelo mercado, todos os esforços são direcionados no sentido de transpor tais parâmetros a fim de atingir nosso maior objetivo, que pode ser traduzido em
                    <span>{" "}COMPROMETIMENTO COM RESULTADOS</span>.
                </p>
                <button>
                    <Link to="/contato">Fale conosco</Link>
                </button>
            </div>
        </div>
    </div>
)