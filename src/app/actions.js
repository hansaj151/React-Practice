/**
 * Created by Hansaj on 18/5/17.
 */
export const GET_TASKS = "GET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const tasks = [
    {
        id : 1,
        type : 'daily',
        text :'check Facebook',
        completed : false
    },
    {
        id : 2,
        type : 'habit',
        text :'walk up the stairs'
    },
    {
        id : 3,
        type : 'todo',
        text :'finish redux slides',
        completed : true
    },
    {
        id : 4,
        type : 'todo',
        text :'finish redux tutorials',
        completed : false
    }
];

export function getTasks() {
    return {
        type: GET_TASKS,
        payload: {
            tasks
        }
    };
}

export function addTask(text, type) {
    return {
        type: ADD_TASK,
        payload: {
            text,
            type
        }
    };
}
export function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: {
            id
        }
    };
}