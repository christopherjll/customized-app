import * as React from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectChangeEvent,
  MenuItem,
  Button,
  Chip,
  Switch,
} from "@mui/material";
import { graphTypes } from "../constants";
import { useAppContext } from "../AppProvider";
import { GraphAction } from "../type";

interface Props {
  root: string;
  title: string;
  type: string;
}

const Title: React.FC<Props> = ({ root, title, type }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(type);
  const { dispatch } = useAppContext();

  const handleMenuItemClick = (event: SelectChangeEvent) => {
    const selectedGraph = event?.target?.value;
    setSelectedIndex(selectedGraph);
    dispatch({
      type: GraphAction.SET_TYPE,
      payload: { type: selectedGraph, id: root },
    });
  };

  const handleVisibilityChange = () => {
    dispatch({
      type: GraphAction.SET_VISIBILITY,
      payload: { type, id: root },
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ width: "30%", marginTop: "10px" }}>
        <Chip label={title} size="medium" />
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div style={{ marginRight: "10px" }}>
          <Select
            value={selectedIndex}
            label="Chart Type"
            onChange={handleMenuItemClick}
            size="small"
            className="title"
          >
            {graphTypes.map((graphType, index) => {
              return (
                <MenuItem value={graphType.value} key={index}>
                  {graphType.label}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div style={{ color: "red" }}>
          <Button variant="outlined" href="#text-buttons" size="large">
            <Link to={`/${root}/view`}>Maximize</Link>
          </Button>
        </div>
        <div>
          <Switch defaultChecked onChange={handleVisibilityChange} />
        </div>
      </div>
    </div>
  );
};

export default Title;
