import {createStore} from "redux";
import {taskReducer} from "../REDUCERS/TaskReducer";
const store =createStore(taskReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store ;