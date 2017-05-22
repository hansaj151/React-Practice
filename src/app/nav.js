/**
 * Created by Hansaj on 19/5/17.
 */
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { login, logout, fetchTasks } from './actions';

 class Navigation extends Component {
     constructor(props) {
        super(props);
     }

     handleLogin(uuid, apiToken) {
         const { dispatch } = this.props;

         dispatch( login( uuid, apiToken ));

         console.log("user logged in and fetching details.");

         dispatch( fetchTasks());

         console.log("Details fetched.");
     }

     render() {
         const { loggedIn, dispatch } = this.props;

         let uuid, apiToken;

         let displayAuthentication = () => {
                return loggedIn ? (<a onClick={ () => { dispatch(logout())} }>Logout</a>) : (
                    <div>
                        <input type = "text" ref = { node => { apiToken = node }} placeholder = "Api Token"/>
                        <input type = "text" ref = { node => { uuid = node }} placeholder = "Uuid"/>
                        <button onClick={ () => this.handleLogin( uuid.value, apiToken.value )}>Login</button>
                    </div>
                );
         }


         return (
             <div>
                 { displayAuthentication() }

             </div>

         );
    }
}

function select(state) {
    let loggedIn = false;

    if ( state.authentication.uuid != undefined || state.authentication.apiToken != undefined ) {
        loggedIn = true;
    }

    if (state.authentication.apiToken == '' || state.authentication.apiToken == '') {
        loggedIn = false;
    }

    return {loggedIn};
}

export default connect(select)(Navigation);