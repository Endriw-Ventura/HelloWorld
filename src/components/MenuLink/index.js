import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";

function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        [styles.link, isActive ? styles.linkUnderlined : ""].join(" ")
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default MenuLink;
