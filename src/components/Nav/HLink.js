import { NavLink } from "react-router-dom";

const HLink = (props) => {
    return (
        <li>
            {" "}
            <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? props.activeClassName : undefined)}
            >
                Home
            </NavLink>
        </li>
    );
};

export default HLink;
