import { NavLink } from "react-router-dom";


const ActiveLink = ({to , children }) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
        isActive
          ? "text-my-blue2"
          : ""
      }>
            {children}
        </NavLink>
    );
};

export default ActiveLink;