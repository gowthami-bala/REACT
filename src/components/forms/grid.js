import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import React from "react";

const DataGrid=()=>{
    const Item = styled(Paper)(() => ({
        textAlign: 'center',
      }));
return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
)
}

export default DataGrid

