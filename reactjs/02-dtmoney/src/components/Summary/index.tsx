import incomePng from '../../assets/income.svg';

import { Container } from './styles';

export function Summary() {
    return (
        <Container>
            <div className='highlight-background'>
                <header>
                    <p>Entradas</p>
                    <img src={incomePng} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    )
}