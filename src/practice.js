import React from 'react';
import { Box, Grid } from '@mui/material';
import styled from '@emotion/styled';

const GridStyle = styled(Grid)`
  @media (max-width: 526px) {
    background-color: red;
    height: 30vh;
  },

  @media (max-width: 1440px) {
    background-color: black;
    height: 30vh;
  }
`;

export default function Practice() {
  return (
    <Box>
      <Grid container spacing={2}>
        <GridStyle item>Hello World</GridStyle>
        <Grid item>Hello Sahil</Grid>
      </Grid>
    </Box>
  );
}
