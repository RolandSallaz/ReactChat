import './App.scss'
import AuthForm from "../AuthForm/AuthForm";
import {auth, getCurrentUser} from "../../utils/Api";
import {IAuthToken, IAuthUser} from "../../types";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {LoggedInContext} from "../../contexts/loggedInContext";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {useEffect, useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const {location} = useLocation();
    const navigate = useNavigate();

    function onAuth(method: 'login' | 'register', data: IAuthUser) {
        auth(method, data)
            .then(({token}: IAuthToken) => {
                localStorage.setItem('token', token)
                setLoggedIn(true)
                navigate('/')
            })
            .catch(console.log)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            getCurrentUser(token).then((res) => {
                setLoggedIn(true)
                navigate('/')
            }).catch((err) => {
                console.log(err)
                setLoggedIn(false)
            })
        }
    }, [location])

    useEffect(() => console.log(loggedIn), [loggedIn])
    return (
        <LoggedInContext.Provider value={loggedIn}>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<ProtectedRoute></ProtectedRoute>}/>
                    <Route path='/auth' element={<AuthForm onAuth={onAuth}/>}/>
                </Routes>
            </main>
        </LoggedInContext.Provider>
    )
}

export default App
