import { getInstance } from './index';
import UserService from '../services/UserService'

export const isUserCompleted = async (to, from, next) => {

    const authService = await getInstance();

    const user = {
        id: authService.user.sub,
    }

    //check value of isCompleted

    try {
        const token = await authService.getTokenSilently()

        const complete = await UserService.isUserCompleted(token, user.id)
        console.log(complete)

        if(!complete){
            return next({name: 'completeProfile'});
        }
        else{
            next()
        }


    } catch (error) {
        console.log(error)
    }



}