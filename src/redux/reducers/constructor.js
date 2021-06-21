import {ADD_TO_CARD, CHANGE_PACKAGE, CHANGE_RANGE, DELETE_COMPONENT, TOGGLE_PACKAGE_MENU} from "../actions/actionTypes"

const initialState = {
    showPack: false,
    packValue: "Small pack",
    componentsValue: {
        soybean: 0,
        sesame: 0,
        wheat: 0,
        corn: 0
    },
    componentsResult: []
}

export default function constructorReducer(state=initialState, action) {
    switch(action.type) {
        case TOGGLE_PACKAGE_MENU:
            return {
                ...state,
                showPack: !state.showPack
            }
        case CHANGE_RANGE:
            return {
                ...state,
                componentsValue: action.componentsValue
            }
        case CHANGE_PACKAGE:
            return {
                ...state,
                packValue: action.packValue
            }
        case ADD_TO_CARD:
            return {
                ...state,
                componentsResult: action.component
            }
        case DELETE_COMPONENT:
            return {
                ...state,
                componentsResult: action.componentsResult
            }
        default:
            return state
    }
}