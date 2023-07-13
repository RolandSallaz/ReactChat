import {useState} from 'react';
import './AuthForm.scss'
function AuthForm() {
    enum AuthEnum {
        LOGIN='Войти',
        REGISTER='Зарегистрироваться'
    }
    const [AuthState, setAuthState] = useState<AuthEnum>(AuthEnum.LOGIN)

    function handleChangeAuthState(){
        setAuthState((prev)=> AuthEnum.LOGIN === prev ? AuthEnum.REGISTER : AuthEnum.LOGIN)
    }
    return (
        <form className='auth-form'>
            <h1 className='heading'>ReactChat</h1>
            <input placeholder='Имя' className={'input'}/>
            <input placeholder='Пароль' type='password' className={'input'}/>
            <button type='submit' className={'submit-button'}>{AuthState}</button>
            <button type='button' className={'toggle-button'} onClick={handleChangeAuthState}>{AuthState === AuthEnum.LOGIN ? 'Еще не зарегистрированы? Зарегистрироваться' : 'Уже зарегистрированы? Войти в аккаунт'}</button>
        </form>
    );
}

export default AuthForm;