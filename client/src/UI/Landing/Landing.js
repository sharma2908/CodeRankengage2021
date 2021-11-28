import React from "react";
import { Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import { Icon, Statistic } from "semantic-ui-react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import CountUp from "react-countup";
import "./Landing.css";
import hero from "../../assets/hero.jpg";
class Landing extends React.Component {
  state = {
    users: "",
    students: "",
    challenges: ""
  };
  componentDidMount = async () => {
    await axios
      .get("http://localhost:5000/api/admin/landing")
      .then(res => {
        console.log("Hello");
        this.setState({
          // users:res.data.users,
          // challenges:res.data.challenges,
          // students:res.data.students,
          users: 680,
          challenges: 400,
          students: 360
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <Jumbotron style={{ padding: "0" }} fluid={true} class="hero">
          <Row
            className="no-gutters"
            style={{ minHeight: "500px", background: "#ffa64d" }}
          >
            <Col className="mt-5 ml-3 d-flex align-items-center" md="6">
              <div>
                <h1 style={{ fontSize: "4rem", color: "#211717" }}>
                  Start practicing here....
                </h1>
                <p style={{ fontSize: "1.34rem", color: "#454d66" }}>
                  Practice makes a man perfect.
                </p>
              </div>
            </Col>
            <Col className="d-flex align-items-center" sm={0} md={4}>
              <img width="400px" src={hero} alt="hero" />
            </Col>
          </Row>
          <Row
            className="no-gutters"
            style={{ minHeight: "350px", background: "#525252" }}
          >
            <Col
              className="ml-3 d-flex align-items-center justify-content-center"
              md={5}
              style={{ paddingTop: "10px" }}
            >
              <div>
                <h2
                  style={{
                    lineHeight: "3rem",
                    fontSize: "2.5rem",
                    color: "white"
                  }}
                >
                  Enhance your Skills with{" "}
                  <span style={{ color: "#f07b3f" }}>CoderRank</span>
                </h2>
                <p style={{ fontSize: "1.34rem", color: "#dedede" }}>
                  Whether you want to improve your problem solving skills,
                  master a new skill, or build expertise in the mission-critical
                  topics you need for career advancement, CoderRank helps you
                  future-proof your career.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <NavLink
                style={{
                  display: "inline-block",
                  color: "#f6f6f6",
                  fontSize: "1.5rem"
                }}
                to="/signin"
              >
                <span
                  style={{
                    borderBottom: "2px solid #f07b3f",
                    paddingBottom: "5px"
                  }}
                >
                  Practice Now <span style={{ color: "#f07b3f" }}>></span>
                </span>
              </NavLink>
            </Col>
          </Row>
        </Jumbotron>
      </>
    );
  }
}

export default Landing;
