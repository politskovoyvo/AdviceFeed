import './App.css'
import WebApp from '@twa-dev/sdk'
import {MainButton, SecondaryButton} from '@twa-dev/sdk/react';
import {UIChat} from "./ui-lib/components/Chat";
import {UIButton} from "./ui-lib/components/Button";

function App() {
    const handleClick = () => {
        // WebApp.close();
        WebApp.close();
    }

    return (
        <>
            <UIChat
                messages={[]}
                sendMethod={(query: string) => Promise.resolve(query)}
                readOnly={false}
                className="max-h-[60vh] md:max-h-[50vh]"/>

            <UIButton>UIButton</UIButton>

            <MainButton text="Continue" onClick={() => alert('continue')}/>
            <SecondaryButton text="Cancel" position="bottom" onClick={handleClick}/>

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
