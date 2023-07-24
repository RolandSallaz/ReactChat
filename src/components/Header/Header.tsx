import './Header.scss'
import {IUser} from "../../types";
import {LuAlignJustify} from "react-icons/lu";
import {BiLogOut} from "react-icons/bi";

type Props = {
    currentUser: IUser,
    onSignOut: ()=>void
};

export function Header({currentUser: {name, id, registerDate}, onSignOut}: Props) {
    const regDate = new Date(registerDate)

    return (
        <header>
            <div className='hamburger-menu'>
                <input id='menu__toggle' type='checkbox'/>
                <label className='menu__button' htmlFor='menu__toggle'>
                    <LuAlignJustify className='menu__icon'/>
                </label>
                <div className='menu__container'>
                    <h1 className={'user__name'}>{name}</h1>
                    <p className={'user__id'}>id: {id}</p>
                    <p className={'user__redDate'}>{`Дата регистрации: ${regDate.getFullYear()}:${regDate.getMonth()}:${regDate.getDay()} ${regDate.getHours()}:${regDate.getMinutes()}`}</p>
                    <button onClick={onSignOut} className='logout-button'>Выйти <BiLogOut className={{marginTop:'2px', fontSize:'30px'}}/></button>
                </div>
            </div>
        </header>
    );
}