import { getInstance } from './index';
import UserService from '@/services/UserService'
export const deleteAdminGuard = async (to, from, next) => {

    const authService = await getInstance();

    const user = {
        id: authService.user.sub,
    }

    //check value of isCompleted

    try {
        const token = await authService.getTokenSilently()

        const checkUser = await UserService.fetchUserWithRoles(token, user.id)
        console.log('ADMIN MIDDLEWARE')
        console.log(checkUser)

        if(checkUser.Roles.length == 0){
            console.log('JE BENT GEEN ADMIN')
                next()
        }

        for(let role of checkUser.Roles){
            if(role.admin == true){
                console.log('JE BENT ADMIN')

                next({name: 'AdminProducts'})
            }
            else{
                console.log('JE BENT GEEN ADMIN')
                next()
            }
        }

    } catch (error) {
        console.log(error)
    }



}