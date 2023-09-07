import { Box } from "@mui/material";
import React, { useState } from "react";
import DataChart from "../../components/charts/DataChart";

import MapDraw from "../../components/maps/MapDraw";

const SelectDate = () => {};

const AvgView = () => {
  const [min, setMin] = useState<Number>(5);
  const [max, setMax] = useState<Number>(15);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box width="50%"></Box>
      <Box width="25%">일별 최저</Box>
      <Box width="25%">일별 최대</Box>
    </Box>
  );
};

const Monitoring = () => {
  return (
    <>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ width: "40%" }}>
          <MapDraw />
        </div>
        <div style={{ width: "60%", display: "flex", flexDirection: "column" }}>
          <AvgView />
          <DataChart />
        </div>
      </div>
    </>
  );
};

export default Monitoring;
