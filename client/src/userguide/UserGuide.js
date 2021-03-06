import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Button, Grid, Header, Icon, Segment } from "semantic-ui-react";
import QuizGuide from "./QuizGuide";
import ChallengeGuide from "./ChallengeGuide";
import UserGuideImage from "./UserGuideImage";

import "./UserGuide.css";

class UserGuide extends React.Component {
  state = {
    quizOpen: false,
    challengeOpen: false,
    quizClicked: false,
    challengeClicked: false,
  };

  onQuizClick = () => {
    this.setState({
      quizClicked: true,
      challengeClicked: false,
    });
  };

  onChallengeClick = () => {
    this.setState({
      quizClicked: false,
      challengeClicked: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col mt={5} md={6} lg={12}>
            <Segment size="large">
              <Grid columns={4} relaxed="very" textAlign="center">
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Header icon>
                      <Icon name="bolt" />
                    </Header>
                    <Button primary onClick={this.onQuizClick}>
                      View Quiz Guide
                    </Button>
                  </Grid.Column>

                  <Grid.Column>
                    <Header icon>
                      <Icon name="chess knight" />
                    </Header>
                    <Button primary onClick={this.onChallengeClick}>
                      View Challenge Guide
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Col>
          {!(
            this.state.quizClicked ||
            this.state.challengeClicked 
          ) ? (
            <UserGuideImage />
          ) : null}
          {this.state.quizClicked ? <QuizGuide /> : null}
          {this.state.challengeClicked ? <ChallengeGuide /> : null}
        </Row>
      </React.Fragment>
    );
  }
}
export default UserGuide;
