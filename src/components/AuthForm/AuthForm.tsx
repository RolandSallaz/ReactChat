import {useState} from 'react';
import './AuthForm.scss'
import {AuthEnum} from "../../utils/enums";
import {IAuthUser} from "../../types";

interface IAuthFormProps {
    onAuth: (method: 'login' | 'register', data: IAuthUser) => void
}

function AuthForm(props:IAuthFormProps) {
    const [AuthState, setAuthState] = useState<AuthEnum>(AuthEnum.LOGIN)
    const [inputData, setInputData] = useState<IAuthUser>({
        name:'',
        password:''
    })
    function handleChangeAuthState(){
        setAuthState((prev)=> AuthEnum.LOGIN === prev ? AuthEnum.REGISTER : AuthEnum.LOGIN)
    }

    function handleFormSubmit(e:React.SyntheticEvent) {
        e.preventDefault()
        props.onAuth(AuthState === AuthEnum.LOGIN ? 'login' : 'register', inputData)
    }

    function handleChange(e:React.FormEvent<HTMLInputElement>) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setInputData((prev)=> ({...prev,[name]:value}))
    }

    return (
        <form className='auth-form' onSubmit={handleFormSubmit}>
            <h1 className='heading'>ReactChat</h1>
            <input placeholder='Имя' className={'input'} minLength={2} name={'name'} onChange={handleChange}/>
            <input placeholder='Пароль' type='password' className={'input'} minLength={8} name={'password'} onChange={handleChange}/>
            <button type='submit' className={'submit-button'}>{AuthState}</button>
            <button type='button' className={'toggle-button'} onClick={handleChangeAuthState}>{AuthState === AuthEnum.LOGIN ? 'Еще не зарегистрированы? Зарегистрироваться' : 'Уже зарегистрированы? Войти в аккаунт'}</button>
        </form>
    );
}

export default AuthForm;