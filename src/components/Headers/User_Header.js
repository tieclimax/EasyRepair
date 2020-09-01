import React from "react";
import "../../assets/css/style.css";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header-top bg-gradient-warning pb-8 pt-5 pt-md-8">
          {/* <div className="header-top  pb-8 pt-5 pt-md-8"> */}
          <Container fluid>
            <div className="header-body">{/* Card stats */}</div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
