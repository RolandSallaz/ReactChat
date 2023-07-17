import {ReactNode, useContext} from "react";
import {LoggedInContext} from "../../contexts/loggedInContext";
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode
};

export function ProtectedRoute({children}: Props) {
    const loggedIn = useContext(LoggedInContext)
    return loggedIn ? <>{children}</> : <Navigate to="/auth"/>
};