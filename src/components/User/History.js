import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Media,
  Container,
  Row,
  Col,
  Label,
  UncontrolledCollapse,
} from "reactstrap";

// core components
import Header from "components/Headers/User_Header";

// mapTypeId={google.maps.MapTypeId.ROADMAP}
const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 13.726717, lng: 100.783186 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 13.726717, lng: 100.783186 }} />
    </GoogleMap>
  ))
);

class History extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3"></Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-center">
                    <h2>ประวัติการแจ้งซ่อม</h2>
                  </div>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                <Container className="list">
                  <Card className="card-stats mb-4 mb-lg-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            <h3>เครื่องปรับอากาศ</h3>
                          </CardTitle>
                          <span className="text-danger mr-1">
                            <i className="ni ni-pin-3" />
                          </span>
                          <Label for="Location">
                            อาคารพระจอมเกล้า ชั้น 3 ห้อง 312 :
                          </Label>

                          <Label for="Address">
                            : 785-212 ลาดกระบัง กรุงเทพฯ 10520
                          </Label>
                        </div>
                        {/** toggle */}
                        <Col className="col-auto" id="toggler1">
                          <h3>
                            <i className="ni ni-bold-down" />
                          </h3>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="ni ni-single-02" />
                          ผู้รับผิดชอบ
                        </span>
                        <span className="text-nowrap">นายใจสะอาด กายสะอาด</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler1">
                        <Card sm="4">
                          <CardBody>
                            <Media tag="li">
                              <Media right top href="#">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/air.jpg")}
                                  alt="Generic placeholder image"
                                  style={{
                                    width: 200,
                                    height: 200,
                                  }}
                                />
                              </Media>
                            </Media>

                            <br />
                            <Label for="Detail">
                              รายละเอียด : เปิดเครื่องไม่ติด
                            </Label>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  <br />
                  <Card className="card-stats mb-4 mb-lg-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            <h3>โปรเจคเตอร์</h3>
                          </CardTitle>
                          <span className="text-danger mr-1">
                            <i className="ni ni-pin-3" />
                          </span>
                          <Label for="Location">
                            อาคารพระจอมเกล้า ชั้น 4 ห้อง 414:
                          </Label>

                          <Label for="Address">
                            : 785-212 ลาดกระบัง กรุงเทพฯ 10520
                          </Label>
                        </div>
                        {/** toggle */}
                        <Col className="col-auto" id="toggler2">
                          <h3>
                            <i className="ni ni-bold-down" />
                          </h3>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="ni ni-single-02" />
                          ผู้รับผิดชอบ
                        </span>
                        <span className="text-nowrap">นายใจดี มีสุข</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler2">
                        <Card className="card-Collaps md-4">
                          <CardBody>
                            <Media tag="li">
                              <Media className="Media-center md-3">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/projector.jpg")}
                                  alt="Generic placeholder image"
                                  style={{
                                    width: 300,
                                    height: 300,
                                  }}
                                />
                              </Media>
                            </Media>
                            <br />
                            <Label for="Detail">
                              รายละเอียด : เป็นคลื่นๆเมื่อฉายบนจอ
                            </Label>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  <br />
                  <Card className="card-stats mb-4 mb-lg-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            <h3>คอมพิวเตอร์</h3>
                          </CardTitle>
                          <span className="text-danger mr-1">
                            <i className="ni ni-pin-3" />
                          </span>
                          <Label for="Location">
                            อาคารจุฬาภรณ์ ชั้น 6 ห้อง 601/1:
                          </Label>

                          <Label for="Address">
                            : 785-212 ลาดกระบัง กรุงเทพฯ 10520
                          </Label>
                        </div>
                        {/** toggle */}
                        <Col className="col-auto" id="toggler3">
                          <h3>
                            <i className="ni ni-bold-down" />
                          </h3>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="ni ni-single-02" />
                          ผู้รับผิดชอบ
                        </span>
                        <span className="text-nowrap">นายอาทิตย์ สวัสดี</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler3">
                        <Card className="card-Collaps md-4">
                          <CardBody>
                            <Media tag="li">
                              <Media className="Media-center md-3">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/computer.jpg")}
                                  alt="Generic placeholder image"
                                  style={{
                                    width: 300,
                                    height: 300,
                                  }}
                                />
                              </Media>
                            </Media>
                            <br />
                            <Label for="Detail">
                              รายละเอียด : เปิดเครื่องไม่ติด
                            </Label>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  <br />
                  <Card className="card-stats mb-4 mb-lg-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            <h3>ท่อน้ำ</h3>
                          </CardTitle>
                          <span className="text-danger mr-1">
                            <i className="ni ni-pin-3" />
                          </span>
                          <Label for="Location">
                            อาคารจุฬาภรณ์ ชั้น 6 ห้องน้ำหญิง:
                          </Label>

                          <Label for="Address">
                            : 785-212 ลาดกระบัง กรุงเทพฯ 10520
                          </Label>
                        </div>
                        {/** toggle */}
                        <Col className="col-auto" id="toggler4">
                          <h3>
                            <i className="ni ni-bold-down" />
                          </h3>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="ni ni-single-02" />
                          ผู้รับผิดชอบ
                        </span>
                        <span className="text-nowrap">นายก้องไกล วันเทา</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler4">
                        <Card className="card-Collaps md-4">
                          <CardBody>
                            <Media tag="li">
                              <Media className="Media-center md-3">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/water.jpg")}
                                  alt="Generic placeholder image"
                                  style={{
                                    width: 300,
                                    height: 300,
                                  }}
                                />
                              </Media>
                            </Media>
                            <br />
                            <Label for="Detail">
                              รายละเอียด : มีน้ำรั่วซึมบนอ่างล้างหน้าผู้หญิง
                            </Label>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  {/* ถึงตรงนี้ */}
                  <br />
                  <br />
                  <br />
                </Container>
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </>
    );
  }
}

export default History;
