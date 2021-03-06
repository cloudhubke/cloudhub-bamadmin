import React from 'react';

import { Grid } from 'cloudhub-components/dist/mui/core';

export default function LivePreviewExample() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-facebook" />
            <h6 className="color-swatch--title">bg-brand-facebook</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-twitter" />
            <h6 className="color-swatch--title">bg-brand-twitter</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-google" />
            <h6 className="color-swatch--title">bg-brand-google</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-instagram" />
            <h6 className="color-swatch--title">bg-brand-instagram</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-pinterest" />
            <h6 className="color-swatch--title">bg-brand-pinterest</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-youtube" />
            <h6 className="color-swatch--title">bg-brand-youtube</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-slack" />
            <h6 className="color-swatch--title">bg-brand-slack</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-dribbble" />
            <h6 className="color-swatch--title">bg-brand-dribbble</h6>
          </div>
        </Grid>
        <Grid item md={3}>
          <div className="color-swatch">
            <div className="color-swatch--bg bg-brand-github" />
            <h6 className="color-swatch--title">bg-brand-github</h6>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
