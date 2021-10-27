import React from "react";
import GridItem from "./GridItem";
import { useAppContext } from "../AppProvider";

interface Props {
  item: string;
}

const GridItemContainer: React.FC<Props> = ({ children, item, ...props }) => {
  const { state } = useAppContext();

  const selectedGraph = state?.data[item];
  const { type, title, data } = selectedGraph;

  return (
    <GridItem
      title={title}
      type={type}
      data={data}
      root={item}
      className={""}
      style={{}}
      {...props}
    >
      {children}
    </GridItem>
  );
};

export default GridItemContainer;
