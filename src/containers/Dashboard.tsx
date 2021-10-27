import React from "react";
import GridLayout from "../components/GridLayout";
import { useAppContext } from "../AppProvider";

const Dashboard: React.FC = () => {
  const { state } = useAppContext();
  const data = Object.keys(state.data).filter((key) => {
    return state.data[key].visibility;
  });

  return (
    <div className="dashboard">
      <GridLayout data={data} layouts={state.layouts} />
    </div>
  );
};

export default Dashboard;
