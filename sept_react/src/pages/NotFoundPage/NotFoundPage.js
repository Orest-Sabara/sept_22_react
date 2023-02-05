import {NavLink} from "react-router-dom";

export const NotFoundPage = () => {
    return(
        <div>
            <h1>404</h1>
            <p>This is not the web page you are looking for.</p>
            <NavLink to="">back</NavLink>
        </div>
    )
}