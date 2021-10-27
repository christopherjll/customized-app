import React from "react";
import { WidthProvider } from "react-grid-layout";
import GraphBlock from "./GraphBlock";

interface Props {
  type: string;
  data: any;
  width?: number;
}

const DetailGraphBlock: React.FC<Props> = ({ type, data, width = 1200 }) => {
  return (
    <div className="detail__graph" style={{ marginTop: "200px" }}>
      <GraphBlock type={type} data={data} width={width} height={450} />
    </div>
  );
};

export default WidthProvider(DetailGraphBlock);
