// 1.actions
// 2.dispatch
// 3.reducers
// 4.store
import {createStore} from "redux"


const initialState =10

export const Actions={
    increment:'Increment',
    decrement:"Decrement",
    reset:"Reset"
}

const counterReducer =(state=initialState,action)=>{
    switch(action.type){
        case Actions.increment:
            return state= state+1;
        case Actions.decrement:
            return state= state-1;
        case Actions.reset:
            return state=0;
        default:
            return state;
    }

}

export const ReduxCounterStore=createStore(counterReducer)

// console.log(ReduxCounterStore.getState())

// ReduxCounterStore.dispatch({type:"decrement"});
// console.log(ReduxCounterStore.getState());

// ReduxCounterStore.dispatch({type:"decrement"});
// console.log(ReduxCounterStore.getState());

// ReduxCounterStore.dispatch({type:"decrement"});
// console.log(ReduxCounterStore.getState());


// ReduxCounterStore.dispatch({type:"decrement"});
// console.log(ReduxCounterStore.getState());

// ReduxCounterStore.dispatch({type:"decrement"});
// console.log(ReduxCounterStore.getState());

// ReduxCounterStore.dispatch({type:"decrement"});
// console.log(ReduxCounterStore.getState());



    
// export default ReduxCounterStore