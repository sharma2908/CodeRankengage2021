import React from "react";
import userguide from "./img/userguide.png";
import { Image, Grid, Container } from "semantic-ui-react";

class UserGuideImage extends React.Component {
  render() {
    return (
      <Container width = {20}>
        <Grid width={14}>
          <Image src={userguide} fluid />
        </Grid>
      </Container>
    );
  }
}

export default UserGuideImage;
