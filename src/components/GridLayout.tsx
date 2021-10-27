import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import GridItemContainer from "./GridItemContainer";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface Props {
  data: any;
  layouts: any;
}

const GridLayout: React.FC<Props> = ({ data, layouts }) => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      isDraggable={true}
      isResizable={true}
      draggableHandle=".grid-item__title"
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {data.map((item: any) => {
        return <GridItemContainer key={item} item={item} />;
      })}
    </ResponsiveGridLayout>
  );
};

export default GridLayout;
