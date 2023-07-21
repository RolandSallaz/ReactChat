import './App.scss'
import AuthForm from "../AuthForm/AuthForm";
import {auth, getCurrentUser} from "../../utils/Api";
import {IAuthToken, IAuthUser, IUser} from "../../types";
import {Route, Routes, useNavigate} from "react-router-dom";
import {LoggedInContext} from "../../contexts/loggedInContext";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {MainPage} from "../MainPage/MainPage";
import {useEffect, useState} from "react";
import {Header} from "../Header/Header";

const emptyUser = {
    name: 'User',
    id: 0,
    registerDate: null
}

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser>(emptyUser)
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

    function onSignOut(){
        localStorage.removeItem('token')
        setLoggedIn(false)
        setCurrentUser(emptyUser)
        navigate('auth')
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
    }, [loggedIn])
    return (
        <LoggedInContext.Provider value={loggedIn}>
            {loggedIn && (<Header currentUser={currentUser} onSignOut={onSignOut}/>)}
            <main className='main'>
                <Routes>
                    <Route path='/' element={<ProtectedRoute><MainPage></MainPage></ProtectedRoute>}/>
                    <Route path='/auth' element={<AuthForm onAuth={onAuth}/>}/>
                </Routes>
            </main>
        </LoggedInContext.Provider>
    )
}

export default App
