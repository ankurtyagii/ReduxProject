import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getSamples } from "../app/api";
import Header from "../components/Header";
import BaseballTable from "../components/BaseballTable";
import styles from "../styles/Home.module.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const { sample } = useAppSelector((state) => state.counter);

  useEffect(() => {
    dispatch(getSamples());
  }, []);

  return (
    <div>
      <Header />
      <BaseballTable sample={sample} />
    </div>
  );
};
export default Home;
