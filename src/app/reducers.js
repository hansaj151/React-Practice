/**
 * Created by Hansaj on 18/5/17.
 */
import { LOGIN, LOGOUT, RECEIVE_TASKS, ADD_TASK, COMPLETE_TASK} from './actions';


export default rootReducer;

const initialState = {
    tasks: [],
    authentication: {}
};

function rootReducer(state= initialState, action) {
    switch (action.type) {
        case LOGIN :
            return Object.assign({}, state, { authentication : action.payload.authentication});

        case LOGOUT :
            return Object.assign({}, state, { tasks : action.payload.tasks, authentication : action.payload.authentication})

        case RECEIVE_TASKS :
            return Object.assign({}, state, { tasks: action.payload.tasks });

        case ADD_TASK :
            return addTaskReducer(state, action);

        case COMPLETE_TASK:
            return completeTaskReducer(state, action);

        default :
            return state;
    }

    return tasks;
}

function addTaskReducer(state, action) {
    var task = action.payload;
    task.completed = false;
    var lastTask = state.tasks[state.tasks.length-1];
    task.id = lastTask.id++;

    return Object.assign({}, state, {tasks : [...state.tasks, task]});
}

function completeTaskReducer(state, action) {
    var id = action.payload.id;

    return Object.assign({}, state, {
        tasks: state.tasks.map(task => {
            if (id === task.id) {
                return Object.assign({}, task, {completed: true});
            }

            return task;
        })
    });
}
