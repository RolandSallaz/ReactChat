import './App.scss'
import AuthForm from "../AuthForm/AuthForm";
import {auth} from "../../utils/Api";
import {IAuthToken, IAuthUser} from "../../types";

function App() {
    function onAuth(method: 'login' | 'register', data: IAuthUser) {
        auth(method, data)
            .then(({token}: IAuthToken) => {
                localStorage.setItem('token', `Bearer ${token}`)
            })
            .catch(console.log)
    }

    return (
        <main className='main'>
            <AuthForm onAuth={onAuth}/>
        </main>
    )
}

export default App
