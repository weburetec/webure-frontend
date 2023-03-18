import React from "react";
import PropTypes from "prop-types";

import { styles } from "../../constants/styles";
import Link from "next/link";

const Tabs = ({ to, text, active, svg }) => {
  return (
    <ul className="flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li className="mr-2 cursor-pointer">
        <Link href={`${to}`}>
          <div className={active ? styles.tabActive : styles.tabInActive}>
            {svg}
            {text}
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Tabs;

Tabs.propTypes = {
  text: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};
