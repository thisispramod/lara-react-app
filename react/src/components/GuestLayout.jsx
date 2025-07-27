import {useStateContext} from "../contexts/ContextProvider.jsx"
import { Navigate,Outlet } from 'react-router-dom';

export default function GuestLayout(){
    const {token} = useStateContext()
    if(token){
        return <Navigate to="/" />
    }
    return ( 
        <div>
        {/* hello i am guest layout */}
        <Outlet />
        </div>
    )
}