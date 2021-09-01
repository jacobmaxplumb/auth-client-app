import { Redirect, Route } from "react-router-dom";

const Protected = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            console.log(rest);
            if (localStorage.getItem('authToken')) {
                return <Component {...props} />
            } else {
                return <Redirect to="/" />
            }
        }
        } />
    );
}

export default Protected;

