/**
 * Created by Hansaj on 18/5/17.
 */

import fetch from 'isomorphic-fetch';
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function fetchTasks() {
    return function (dispatch, getState) {
        console.log("Fetch called");
        let state = getState();
        console.log(state);


        if (state.authentication.uuid === undefined || state.authentication.apiToken === undefined) {

            console.log("User not logged in to fetch details");
            return function () {};
        }
        if (state.authentication.apiToken == '' || state.authentication.apiToken == '') {
            console.log("User not logged in to fetch details");
            return function () {};
        }
        console.log("User logged in to fetch details");
        return fetch('https://habatica.com:443/api/v2/user/tasks', {
            headers : {
                'X-API-User': state.authentication.uuid,
                'X-API-Key' : state.authentication.apiToken
            },
            timeout: 5000
        })
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveTasks(json));
        });

        console.log("json recieved");
    }
}

export function receiveTasks(tasks) {
    return {
        type: RECEIVE_TASKS,
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

export function login( uuid, apiToken ) {
    return {
        type : LOGIN,
        payload : {
            authentication : {
                uuid : uuid,
                apiToken : apiToken
            }
        }
    };
}

export function logout( uuid, apiToken ) {
    console.log("Logout called from actions");
    return {
        type : LOGOUT,
        payload : {
            tasks : [],
            authentication : {
                uuid: '',
                apiToken: ''
            }
        }
    };
}