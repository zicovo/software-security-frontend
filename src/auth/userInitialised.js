import { getInstance } from './index';
import UserService from '../services/UserService'

export const userInit = async () => {
    const authService = await getInstance();

    const user = {
        id: authService.user.sub,
        email: authService.user.email
    }

    //check if the user exists in the db
    try {
        const token = await authService.getTokenSilently()
        const registered = await UserService.findOne(token, user.id)
        console.log(registered)
        if(registered === false){
            try {
                //initialiseer user account met email en sub
                const data = await UserService.userInit(token, user) 
                console.log(data)
                
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }


}