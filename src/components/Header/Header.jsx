import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import HeaderSvgSelector from "./HeaderSvgSelector";
import PropTypes from "prop-types";

const setActive = ({ isActive }) => (isActive ? styles.isActive : styles.fonts);

const Header = ({ nameOfFirstSection, nameOfSecondSection }) => (
  <header className={styles.container}>
    <div className={styles.svg}>
      <HeaderSvgSelector id="svg" />
    </div>
    <ul className={styles.containerForLinks}>
      <li>
        <Link to="/" className={styles.fonts}>
          {nameOfFirstSection}
        </Link>
      </li>
      <li>
        <NavLink to="/about" className={setActive}>
          {nameOfSecondSection}
        </NavLink>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  nameOfFirstSection: PropTypes.string.isRequired,
  nameOfSecondSection: PropTypes.string.isRequired,
};

export default Header;
