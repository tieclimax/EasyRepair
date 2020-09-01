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
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานทั้งหมด
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">22</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="ni ni-box-2" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-info mr-2">
                          <i className="fa fa-arrow-up" /> 21.01%
                        </span>{" "}
                        <span className="text-nowrap">all work</span>
                      </p>
                      <Progress color="info" value="22" />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานเข้าใหม่
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">11</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="ni ni-cart" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fa fa-arrow-up" /> 11.48%
                        </span>{" "}
                        <span className="text-nowrap">all new work</span>
                      </p>
                      <Progress color="warning" value="11" />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานเสร็จเเล้ว
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">32</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                            <i className="ni ni-books" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 32.01%
                        </span>{" "}
                        <span className="text-nowrap">completed work</span>
                      </p>
                      <Progress color="success" value="32" />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานยังไม่เสร็จ
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">5</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="ni ni-archive-2" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fa fa-arrow-up" /> 5.01%
                        </span>{" "}
                        <span className="text-nowrap">completed work</span>
                      </p>
                      <Progress color="danger" value="5" />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
