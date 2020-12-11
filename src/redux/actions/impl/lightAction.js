import { LIGHTS } from '../types'

export const lightAction = (value) => {
    return {
        type: LIGHTS,
        payload: {
            value: value
        }
    }
}