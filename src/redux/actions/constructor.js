import {TOGGLE_PACKAGE_MENU, CHANGE_RANGE, CHANGE_PACKAGE, ADD_TO_CARD, DELETE_COMPONENT} from "./actionTypes"

export const changeVisibleMenu = () => {
    return {
        type: TOGGLE_PACKAGE_MENU
    }
}

const changeRange = componentsValue => {
    return {
        type: CHANGE_RANGE,
        componentsValue
    }
}

export const rangeHandler = (event, component) => {
    return (dispatch, getState) => {
        const componentsValue = {...getState().constructorReducer.componentsValue}
        componentsValue[component] = event.target.value
        const sum = Number(componentsValue.soybean) + Number(componentsValue.sesame) + Number(componentsValue.wheat)
        if (sum <= 100) {
            componentsValue.corn = 100 - sum
            dispatch(changeRange(componentsValue))
        }
        if (sum === 0) {
            componentsValue.corn = 0
            dispatch(changeRange(componentsValue))
        }
    }
}

const actionPackValue = packValue => {
    return {
        type: CHANGE_PACKAGE,
        packValue
    }
}

export const changePackage = pack => {
    return dispatch => {
        dispatch(actionPackValue(pack))
        dispatch(changeVisibleMenu())
    }
}

const addToCardHandler = component => {
    return {
        type: ADD_TO_CARD,
        component
    }
}

export const addToCard = () => {
    return (dispatch, getState) => {
        const state = {...getState().constructorReducer}
        let sum = 0;
        for (let i in state.componentsValue) {
            sum += Number(state.componentsValue[i])
        }
        if (sum != 100) {
            alert("Укажите параметры")
        } else {
            state.componentsResult.push(state.componentsValue)
            dispatch(addToCardHandler(state.componentsResult))
        }
    }
}

const deleteComponentAction = componentsResult => {
    return {
        type: DELETE_COMPONENT,
        componentsResult
    }
}

export const deleleComponent = index => {
    return (dispatch, getState) => {
        const state = {...getState().constructorReducer}
        state.componentsResult.splice(index, 1)
        dispatch(deleteComponentAction(state.componentsResult))
    }
}
