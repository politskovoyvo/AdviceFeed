import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebApp from '@twa-dev/sdk'
import { MainButton, SecondaryButton } from '@twa-dev/sdk/react';

function App() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        // WebApp.close();
        WebApp.close();
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>

            <h1>Vite + React</h1>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            <MainButton text="Continue" onClick={() => alert('continue')} />
            <SecondaryButton text="Cancel" position="bottom" onClick={handleClick} />

            {/*<button onClick={() => alert('cancelled')}>*/}
            {/*    Click*/}
            {/*</button>*/}
            {/*<p className="read-the-docs">*/}
            {/*    Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </>
    )
}

export default App
