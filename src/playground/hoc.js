// Higher Order Components(HOC) -- A component (HOC) that renders another component
// Reuse code
// Render Hijacking
 // Props manipulation
 // Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The Info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login to view the Info!</p>
            )}
            
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are details." />, document.getElementById('app'));

