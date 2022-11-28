import { NavLink } from "react-router-dom";

const CLink = (props) => {
    return (
        <li>
            <NavLink
                to={"/catalog"}
                className={({ isActive }) => (isActive ? props.activeClassName : undefined)}
            >
                Catalog
            </NavLink>
        </li>
    );
};

export default CLink;
