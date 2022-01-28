import { ADD_TASK, DONE_TASK, DELETE_TASK } from "../ACTIONTYPES/TaskConst";

const initialState = {
  todolist: [{ text: "hello world", id: 1, isDone: false }],
};

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todolist: [...state.todolist, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        todolist: state.todolist.filter((el) => el.id !== payload),
      };
    case DONE_TASK:
      return {
        ...state,
        todolist: state.todolist.map((el) =>
          el.id == payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    default:
      return state;
  }
};
