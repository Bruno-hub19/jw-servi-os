import { Link } from 'react-router-dom'

import { Cover } from '../components/Cover'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.css'

export const Home = () => (
    <div>
        <Header />
        <Cover />
        <div className={styles.mainTextContainer} >
            <h1>Serviços</h1>
            <p>Descubra como podemos ajudar a sua empresa</p>
        </div>
        <div className={styles.serviceGridContainer} >
            <div>
                <h1>Amarração e enlonamento de cargas</h1>
            </div>
            <div>
                <p>A amarração e enlonamento de cargas no modal rodoviário e ferroviário são serviços essenciais para garantir a segurança no transporte de mercadorias. A amarração consiste em fixar firmemente a carga ao veículo, evitando deslocamentos durante o trajeto, enquanto o enlonamento envolve cobrir a carga com lonas, protegendo-a contra intempéries e danos. Esses procedimentos asseguram que os bens transportados cheguem ao destino em perfeitas condições, atendendo às normas de segurança e preservando a integridade da carga.</p>
                <button>
                    <Link>+ Saiba mais</Link>
                </button>
            </div>
        </div>
    </div>
)