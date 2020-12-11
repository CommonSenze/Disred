import { LOGIN } from '../types'

export const loginAction = (profile) => {
    return {
        type: LOGIN,
        payload: {
            profile: profile
        }
    }
}