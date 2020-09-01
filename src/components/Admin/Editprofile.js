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
  FormGroup,
  Form,
  Input,
  InputGroup,
  Container,
  Label,
  Row,
  Col,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import Upwork from "components/Manager/Upwork";
import App from "components/Manager/App";
import UserHeader from "components/Headers/UserHeader.js";

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

class Editprofile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3"></Col>
                </Row>
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    {/** */}
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="3">
                        <App />
                      </Col>
                    </Row>
                    <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      {/*<div className="justify-content-right">
                        <Button
                          className="mr-4"
                          color="danger"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Edit
                        </Button>
    </div>*/}
                    </CardHeader>
                    {/** */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">ประวัติส่วนตัว</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Settings
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4"></h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                ชื่อผู้ใช้
                              </label>
                              <Input
                                className="form-control-alternative"
                                disabled
                                defaultValue="KMITL-FIXD01"
                                id="input-username"
                                placeholder="Username"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                defaultValue="somsriza55@kmitl.ac.th"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                ชื่อ
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="ป้าสมศรี"
                                id="input-first-name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                นามสกุล
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="ออซ้อ"
                                id="input-last-name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                เบอร์โทร
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="098-7654321"
                                id="input-tel"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            to="/admin/Profile"
                            tag={Link}
                            className="mt-4"
                            color="success"
                            type="button"
                          >
                            บันทึก
                          </Button>

                          <Button
                            className="mt-4"
                            /*ความสูง*/ color="danger"
                            type="button"
                            alert
                          >
                            ยกเลิก
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Editprofile;
