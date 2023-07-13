import './App.scss'
import AuthForm from "../AuthForm/AuthForm";
import {auth, register} from "../../utils/Api";
import {AuthEnum} from "../../utils/enums";
import {IAuthUser} from "../../types";

function App() {
    function onAuth(method: AuthEnum, data: IAuthUser) {
        auth(method,data)
            .then(console.log)
            .catch(console.log)
    }

    return (
        <main className='main'>
            <AuthForm onAuth={onAuth}/>
        </main>
    )
}

export default App
