import React, {useState} from 'react';
import './AuthForm.scss'
function AuthForm(props) {
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
            <input/>
            <input/>
            <button type='submit' className={'auth-form__submit-button'}>{AuthState}</button>
            <button type='button' onClick={handleChangeAuthState}>{AuthState === AuthEnum.LOGIN ? 'Еще не зарегистрированы? Зарегистрироваться' : 'Уже зарегистрированы? Войт и в аккаунт'}</button>
        </form>
    );
}

export default AuthForm;