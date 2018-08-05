import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';

const Login = ({ currentUser }) => (
    <h1 className = "login-title">
        SUNY POLY SHARE
        <body className = "login-background">
            <div className = "login-center">
                <div>
                    {currentUser && <p> Welcome, {currentUser.displayName} {currentUser.isAdmin && '(ADMIN)'} </p>}
                    <Components.AccountsLoginForm redirect = {false} />
                </div>
            </div>
        </body>
    </h1>
);

registerComponent('Login', Login, withCurrentUser);