import React from "react";
//import React, { useState } from "react";
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
  Media,
  UncontrolledCollapse,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import Upwork from "components/Manager/Upwork";

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

class Listitem2 extends React.Component {
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
                            <Media tag="content-center">
                              <Media className="Media-center md-3">
                                <Media
                                  object
                                  src={require("assets/img/icons/common/fan.jpg")}
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
                              -ใบพัดลมเสีย <br />
                              -ต้องเปลี่ยนใบพัด
                            </Label>

                            <br />

                            <br />
                            <Row>
                              <Col sm="1">
                                <Label for="Statusselect">สถานะ</Label>
                              </Col>
                              <Col sm={{ size: "4", offset: 0 }}>
                                <Input
                                  type="select"
                                  name="Status"
                                  id="Statusselect"
                                >
                                  <option>เสร็จ</option>
                                  <option>ยังไม่เสร็จ</option>
                                  <option>กำลังดำเนินงาน</option>
                                </Input>
                                <br />
                              </Col>
                            </Row>
                          </CardBody>
                          {/** <div>
                            <p>you click {React.count} </p>
                            <button
                              onClick={() => React.setCount(React.count + 1)}
                            >
                              Add
                            </button>
                            useState : {React.count}
                          </div>*/}

                          <Card className="card-stats mb-4 mb-lg-0">
                            {/** Uploadimages */}
                            <small>*อัพรูปภาพ</small>
                            <Upwork />
                          </Card>
                        </Card>
                        <div className="text-center">
                          <Button
                            className="mt-2"
                            color="primary"
                            type="button"
                            to="/manager/Listitem"
                            tag={Link}
                          >
                            ส่งงาน
                          </Button>
                        </div>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                  {/**end of list */}
                </Container>
                {/* ถึงตรงนี้ */}
                <br />
                <br />
                <br />
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </>
    );
  }
}

export default Listitem2;
