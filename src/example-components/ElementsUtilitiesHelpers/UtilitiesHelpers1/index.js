import React from 'react';

import { Grid } from 'cloudhub-components/dist/mui/core';

export default function LivePreviewExample() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-primary" />
            <h6 className="color-swatch--title">bg-primary</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-secondary" />
            <h6 className="color-swatch--title">bg-secondary</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-first" />
            <h6 className="color-swatch--title">bg-first</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-second" />
            <h6 className="color-swatch--title">bg-second</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-success" />
            <h6 className="color-swatch--title">bg-success</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-warning" />
            <h6 className="color-swatch--title">bg-warning</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-danger" />
            <h6 className="color-swatch--title">bg-danger</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-info" />
            <h6 className="color-swatch--title">bg-info</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-light" />
            <h6 className="color-swatch--title">bg-light</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-dark" />
            <h6 className="color-swatch--title">bg-dark</h6>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
