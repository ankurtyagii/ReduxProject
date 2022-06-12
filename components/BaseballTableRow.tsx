import React from "react";

import { BaseballTableRowProps } from "../utils/interfaces";
import styles from "../styles/Home.module.css";

const BaseballTableRow: React.FC<BaseballTableRowProps> = (props) => {
  const { item = {}, index = 0 } = props;
  return (
    <tr className={styles.tr}>
      <td className={styles.td} key={index}>
        {item.id}
      </td>
      <td className={styles.td} key={index}>
        {item.Player}
      </td>
      <td className={styles.td} key={index}>
        {item.Hits}
      </td>
      <td className={styles.td} key={index}>
        {item.Rank}
      </td>
      <td className={styles.td} key={index}>
        {item.Year}
      </td>
    </tr>
  );
};

export default BaseballTableRow;
