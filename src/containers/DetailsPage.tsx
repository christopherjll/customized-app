import React from "react";
import { Button, Chip } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import DetailGraphBlock from "../components/DetailGraphBlock";
import { useAppContext } from "../AppProvider";

const DetailPage = () => {
  const { state } = useAppContext();
  const { id } = useParams<{ id: string }>();
  const selectedGraph = state.data[id];

  const { title, type, data } = selectedGraph;
  return (
    <div className="detail-page">
      <div className="detail-page__title">
        <Chip label={title} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <Button href="#text-buttons" variant="outlined">
          <Link to="/">Close</Link>
        </Button>
      </div>

      <DetailGraphBlock type={type} data={data} />
    </div>
  );
};

export default DetailPage;
