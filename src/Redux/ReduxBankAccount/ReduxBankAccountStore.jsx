import {createStore} from "redux"

const initialState ={
    balance:1000,
    name:"varsha",
    contact:8096753544,
}

export const Actions={
    Deposit:"deposit",
    Withdrawal:"withdrawal",
    UpdateName:"updateName",
    UpdateContact:"updateContact"
}

const reduxAccountReducers=(state=initialState,actions)=>{
    switch(actions.type){
        case Actions.Deposit:
            return {...state,balance:state.balance+actions.payload} 
        case Actions.Withdrawal:
            return {...state,balance:state.balance-actions.payload}    
        case Actions.UpdateName:
            return {...state,name:actions.payload} 
        case Actions.UpdateContact:
            return {...state,contact:actions.payload} 
        default:
            return state;
        
        }
}


const reduxTransactionReducer=(state=[],action)=>{
    switch(actions.type){
        case Actions.Transactions:
            return[...state,{
                id:actions.payload.id,
                value:actions.payload.value,
                type:actions.payload.type,
                date:actions.payload.date,
            }]
    }
}


const rootReducer = combineReducers({
    account:reduxAcountReducer,
    transactions:reducerTransactionReducer
})

console.log(rootReducer.getState())

export const reduxBankStore =createStore(rootReducer)
console.log(reduxBankStore.getState());

reduxBankStore.dispatch({type:Actions.Deposit,payload:21})
console.log(reduxBankStore.getState());
