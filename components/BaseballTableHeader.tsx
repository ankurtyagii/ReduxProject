import React from "react";

import styles from "../styles/Home.module.css";

const BaseballTableHeader = () => {
  return (
    <tr className={styles.tr}>
    <th className={styles.td}>ID</th>
    <th className={styles.td}>Player</th>
    <th className={styles.td}>Hits</th>
    <th className={styles.td}>Rank</th>
    <th className={styles.td}>Year</th>
  </tr>
  );
};

export default BaseballTableHeader;
