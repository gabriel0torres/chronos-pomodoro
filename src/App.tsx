import './styles/theme.css'
import './styles/global.css'
//import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action=''>
                    <div>
                        <label htmlFor="task">What do you want to work on?</label>
                        <input type="text" id="task" placeholder="Name of the task" />
                    </div>

                    <div className='formRow'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti 
                            esse illo doloribus incidunt reiciendis magni quo accusantium maiores nisi 
                            natus voluptate culpa ipsum distinctio, quia, nesciunt vero laboriosam voluptatem!
                        </p>
                    </div>

                    <div className='formRow'>
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0</p>
                    </div>

                    <div className='formRow'>
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
            
        </>
    )
}