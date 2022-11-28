import { NavLink } from "react-router-dom";

const RLink = (props) => {
    return (
        <li>
            <NavLink
                to={"/register"}
                className={({ isActive }) =>
                    isActive ? props.activeClassName : undefined
                }
            >
                Register
            </NavLink>
        </li>
    );
};

export default RLink;
