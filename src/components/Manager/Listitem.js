import React from "react";
//import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  Button,
  CardTitle,
  Label,
  Input,
  InputGroup,
  Media,
  UncontrolledCollapse,
} from "reactstrap";
import { Redirect } from "react-router";
// core components
import Header from "components/Headers/Header.js";
import Listitem2 from "components/Manager/Listitem2";

// mapTypeId={google.maps.MapTypeId.ROADMAP}
//const [status, setStatus] = useState("ยังไม่เสร็จ");
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

class Listitem extends React.Component {
  state = {
    redirect: false,
  };
  redirectHandler = () => {
    this.setState({ redirect: true });
    this.renderRedirect();
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="./Listitem2.js" />;
    }
  };
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
                    <h2>อัพเดตงาน</h2>
                  </div>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                <Container className="list">
                  <Card className="card-stats mb-4 mb-lg-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            <h3>พัดลม</h3>
                          </CardTitle>
                          <span className="text-danger mr-1">
                            <i className="ni ni-pin-3" />
                          </span>
                          <Label for="Location">
                            อาคารพระจอมเกล้า ชั้น 3 ห้อง 212 :
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
                        <span className="text-nowrap">นายสันดร นอนดึก</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler1">
                        <Card className="card-Collaps md-4">
                          <CardBody>
                            <Media tag="li">
                              <Media className="Media-center md-3">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/fan.jpg")}
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
                              -ใบพัดลมเสีย <br />
                              -ต้องเปลี่ยนใบพัด
                            </Label>

                            <Row>
                              <Col sm="1">
                                <Label for="Status">สถานะ</Label>
                              </Col>
                              <Col sm={{ size: "4", offset: 0 }}>
                                <InputGroup className="input-group-alternative mb-2">
                                  <Input
                                    className="form-control-alternative"
                                    defaultValue="เสร็จเเล้ว"
                                    id="update-status"
                                    placeholder="update-status"
                                    type="text"
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <div className="text-center">
                          {this.renderRedirect()}
                          <Button
                            to="/manager/Listitem2"
                            tag={Link}
                            className="mt-2"
                            color="primary"
                            type="button"
                          >
                            อัพเดตงาน
                          </Button>
                        </div>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  <br />
                  <Card className="card-stats mb-4 mb-lg-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle className="text-uppercase text-muted mb-0">
                            <h3>จอคอมพิวเตอร์</h3>
                          </CardTitle>
                          <span className="text-danger mr-1">
                            <i className="ni ni-pin-3" />
                          </span>
                          <Label for="Location">
                            อาคารพระจอมเกล้า ชั้น 3 ห้อง 212 :
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
                        <span className="text-nowrap">นายสันดร นอนดึก</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler2">
                        <Card className="card-Collaps md-4">
                          <CardBody>
                            <Media tag="li">
                              <Media className="Media-center md-3">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/com.jpg")}
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
                              -จอแตก <br />
                              -จอฟ้า
                            </Label>

                            <Row>
                              <Col sm="1">
                                <Label for="Status">สถานะ</Label>
                              </Col>
                              <Col sm={{ size: "4", offset: 0 }}>
                                <InputGroup className="input-group-alternative mb-2">
                                  <Input
                                    className="form-control-alternative"
                                    defaultValue="เสร็จเเล้ว"
                                    id="update-status"
                                    placeholder="update-status"
                                    type="text"
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <div className="text-center">
                          <Button
                            className="mt-2"
                            color="primary"
                            type="button"
                            to="/manager/Listitem2"
                            tag={Link}
                          >
                            อัพเดตงาน
                          </Button>
                        </div>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  <br />
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
                            อาคารพระจอมเกล้า ชั้น 3 ห้อง 212 :
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
                        <span className="text-nowrap">นายสันดร นอนดึก</span>
                      </p>
                      <UncontrolledCollapse toggler="#toggler2">
                        <Card className="card-Collaps md-4">
                          <CardBody>
                            <Media tag="li">
                              <Media className="Media-center md-3">
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
                              -เปลี่ยนใส้กรอง <br />
                              -เป่าพัดลม
                            </Label>

                            <Row>
                              <Col sm="1">
                                <Label for="Status">สถานะ</Label>
                              </Col>
                              <Col sm={{ size: "4", offset: 0 }}>
                                <InputGroup className="input-group-alternative mb-2">
                                  <Input
                                    className="form-control-alternative"
                                    defaultValue="เสร็จเเล้ว"
                                    id="update-status"
                                    placeholder="update-status"
                                    type="text"
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <div className="text-center">
                          <Button
                            className="mt-2"
                            color="primary"
                            type="button"
                            to="/manager/Listitem2"
                            tag={Link}
                          >
                            อัพเดตงาน
                          </Button>
                        </div>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  <br />
                  {/**end of list */}
                </Container>
                {/** */}
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </>
    );
  }
}

export default Listitem;
