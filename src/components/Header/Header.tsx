import './Header.scss'
import {IUser} from "../../types";

type Props = {
    currentUser: IUser,
    onSignOut: ()=>void
};

export function Header({currentUser: {name, id, registerDate}, onSignOut}: Props) {
    const regDate = new Date(registerDate)


    return (
        <header>
            <div className='user-profile'><h1 className='user-profile__name'>{name}</h1>
                <p>id: {id}</p>
                <p>{`Дата регистрации: ${regDate.getFullYear()}:${regDate.getMonth()}:${regDate.getDay()} ${regDate.getHours()}:${regDate.getMinutes()}`}</p>
            </div>
            <button onClick={onSignOut}>Выйти</button>
        </header>
    );
};