import React, { Component } from "react";
// import Stats from "../components/stats";
import AthleteCard from "../components/athletecard";

import Grid from "@material-ui/core/Grid";

export class home extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm />
          <Grid item sm>
            <AthleteCard />
            {/* <Stats /> */}
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

export default home;
