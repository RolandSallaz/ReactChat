import './App.scss'
import AuthForm from "../AuthForm/AuthForm";
import {auth, getCurrentUser} from "../../utils/Api";
import {IAuthToken, IAuthUser, IUser} from "../../types";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {LoggedInContext} from "../../contexts/loggedInContext";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {useEffect, useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser>({
        name: 'User',
        id: 0
    })
    const location = useLocation();
    const navigate = useNavigate();

    function onAuth(method: 'login' | 'register', data: IAuthUser) {
        auth(method, data)
            .then(({token}: IAuthToken) => {
                localStorage.setItem('token', token)
                setLoggedIn(true)
                navigate('/')
                console.log(currentUser)
            })
            .catch(console.log)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            getCurrentUser(token).then((res) => {
                setCurrentUser(res)
                setLoggedIn(true)
                navigate('/')
            }).catch((err) => {
                console.log(err)
                setLoggedIn(false)
            })
        }
    }, [])
    return (
        <LoggedInContext.Provider value={loggedIn}>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<ProtectedRoute><h1>123123123</h1></ProtectedRoute>}/>
                    <Route path='/auth' element={<AuthForm onAuth={onAuth}/>}/>
                </Routes>
            </main>
        </LoggedInContext.Provider>
    )
}

export default App
