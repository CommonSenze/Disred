import { LOGIN, LOGOUT, LIGHTS } from './actions/types'

const authInitialState = {
    user: {},
    isLoggedIn: false,
}

const rootInitialState = {
    lightsOn: true,
}

export const authReducer = (state = authInitialState, action) => {
    switch(action.type){
        case LOGIN: return {
            ...state,
            profile: action.payload.profile,
            isLoggedIn: true,
        }
        case LOGOUT: return authInitialState
        default: return state
    }
}

export const rootReducer = (state = rootInitialState, action) => {
    switch(action.type){
        case LIGHTS: return {
            ...state,
            lightsOn: action.payload.value,
        }
        default: return state
    }
}

