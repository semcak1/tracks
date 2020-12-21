import React from 'react';
import {Context as AuthContext} from '../context/AuthContext'



const ResolveAuthScreen = () => {

    const {autoLogin} = React.useContext(AuthContext)

    React.useEffect(() => {
        autoLogin()
    }, [])

    return null;
}


export default ResolveAuthScreen;
