/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards ">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  ขอบคุณที่ช่วยแจ้งซ่อมกับเรา
                </h3>
                <h4 className="mb-0 font-weight-light">
                  ช่วยกันดูแลสถาบันเพื่อความยั่งยืน ใช้บริการเรา EZrepair
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href=""
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-bandcamp" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href=""
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a>King Mongkut's Institute of Technology Ladkrabang.</a>
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink href="" target="_blank">
                      EZrepair
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="" target="_blank">
                      เกี่ยวกับเรา
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="" target="_blank">
                      บทความ
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="d" target="_blank">
                      ลิขสิทธิ์
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
