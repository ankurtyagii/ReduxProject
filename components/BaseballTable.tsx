import React from "react";

import BaseballTableHeader from "./BaseballTableHeader";
import BaseballTableRow from "./BaseballTableRow";
import { BaseballTableProps } from "../utils/interfaces";
import styles from "../styles/Home.module.css";

const BaseballTable: React.FC<BaseballTableProps> = (props) => {
  const { sample = [] } = props;
  return (
    <table className={styles.table}>
      <BaseballTableHeader />
      {sample.data.map((item: any, index: any) => {
        return <BaseballTableRow item={item} index={index} />;
      })}
    </table>
  );
};

export default BaseballTable;
