import { NavLink } from "react-router-dom";

import "../PLink.css";

const PLink = (props) => {
    return (
        <>
            <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                    isActive ? props.activeClassName : undefined
                }
            >
                [{props.getUsername}]
            </NavLink>
        </>
    );
};

export default PLink;
