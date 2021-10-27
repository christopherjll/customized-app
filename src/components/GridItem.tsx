import React from "react";
import GraphBlock from "./GraphBlock";
import Title from "./Title";

interface Props {
  title: string;
  type: string;
  data: any;
  root: string;
  style: any;
  className: string;
}

const GridItem: React.FC<Props> = ({
  title,
  data,
  type,
  className,
  style = {},
  root,
  children,
  ...rest
}) => {
  const width = parseInt(style.width, 10);
  const height = parseInt(style.height, 10) - 50;
  return (
    <div className={`grid-item ${className}`} style={style} {...rest}>
      <div className="grid-item__title">
        <Title title={title} type={type} root={root} />
      </div>
      <div className="grid-item__graph">
        <GraphBlock type={type} data={data} width={width} height={height} />
      </div>
      {children}
    </div>
  );
};

export default GridItem;
