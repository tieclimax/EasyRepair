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
  CardImg,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
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

class Service extends React.Component {
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
                    <h2>แจ้งซ่อม</h2>
                  </div>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                <CardHeader className="bg-white pb-5">
                  <div className="text-center">
                    <div className="text-muted font-italic">
                      <small>อัพโหลดรูปภาพอุปกรณ์ที่ชำรุด</small>
                    </div>
                    <Button
                      className="btn-neutral btn-icon mr-5"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i class="ni ni-camera-compact"></i>
                      <span className="btn-inner--text">
                        อัพโหลดรูปภาพอุปกรณ์ที่ชำรุด
                      </span>
                    </Button>
                    <br />
                    <br />

                    <Col sm={{ size: 6, offset: 3 }}>
                      <CardImg
                        top
                        width="100%"
                        src={require("assets/img/icons/common/water.jpg")}
                        alt="No card image cap"
                      />
                    </Col>

                    <br />

                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-pin-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="อาคารพระจอมเกล้า 123456789"
                            type="GPS"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Form>

                    <div className="text-muted font-italic">
                      <small>อัพโหลดรูปภาพสถานที่</small>
                    </div>
                    <Button
                      className="btn-neutral btn-icon ml-1"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i class="ni ni-camera-compact"></i>
                      <span className="btn-inner--text">
                        อัพโหลดรูปภาพสถานที่
                      </span>
                    </Button>
                    <br />
                    <br />

                    <Col sm={{ size: 6, offset: 3 }}>
                      <CardImg
                        top
                        width="100%"
                        src={require("assets/img/icons/common/prajom.jpg")}
                        alt="No card image cap"
                      />
                    </Col>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-3">
                    <small>กรอกรายละเอียดเพิ่มเติม</small>
                  </div>
                  <Form role="form">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-1">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-building" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="อาคาร/ตึก" type="bluiding" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-building" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="ชั้น" type="floor" />
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-building" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="ห้อง" type="room" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        placeholder="รายละเอียดเพิ่มเติม"
                        type="textarea"
                        name="text"
                        id="exampleText"
                      />
                    </FormGroup>
                    <div className="text-center">
                      <Button
                        className="mt-1"
                        color="primary"
                        type="button"
                        to="/user/index"
                        tag={Link}
                      >
                        Sent
                      </Button>
                      <Button
                        className="mt-2"
                        color="secandary"
                        type="button"
                        to="/"
                        tag={Link}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Service;
