import { NavLink } from "react-router-dom";

const LLink = (props) => {
    return (
        <li>
            <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? props.activeClassName : undefined)}
            >
                Login
            </NavLink>
        </li>
    );
};

export default LLink;
