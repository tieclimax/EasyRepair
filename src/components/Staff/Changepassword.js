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

class Changepassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "password",
      password2: "newpassword",
      password3: "confrimpassword",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("รหัสผ่านเก่า", data);
    const data2 = this.state;
    console.log("รหัสผ่านใหม่", data2);
    const data3 = this.state;
    console.log("ยืนยันรหัสผ่านใหม่", data3);
  };
  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      [event.target.value]: event.target.value1,
      [event.target.value]: event.target.value2,
      [event.target.value]: event.target.value3,
    });
  };
  render() {
    const { password1 } = this.state;
    const { password2 } = this.state;
    const { password3 } = this.state;
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
                    <h2>เปลียนรหัสผ่าน</h2>
                  </div>
                </CardHeader>
                {/* เอาโค้ดมาวางต่อข้างล่างนี้ */}
                <CardBody className="px-lg-1 py-lg-5">
                  <Form className="text-center">
                    <FormGroup>
                      <Row className="justify-content-center">
                        <Col sm="3">
                          <Label for="oldpassword">รหัสผ่านเก่า</Label>
                        </Col>
                        <Col sm={{ size: "4", offset: 0 }}>
                          <form onSubmit={this.handleSubmit}>
                            <InputGroup className="input-group-alternative mb-2">
                              <Input
                                type="password"
                                name="password1"
                                id="{password}"
                                placeholder=" "
                                onChange={this.handleInputChange}
                              />
                            </InputGroup>
                          </form>
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup>
                      <Row className="justify-content-center">
                        <Col sm="3">
                          <Label for="oldpassword">รหัสผ่านใหม่</Label>
                        </Col>
                        <Col sm={{ size: "4", offset: 0 }}>
                          <form onSubmit={this.handleSubmit}>
                            <InputGroup className="input-group-alternative mb-2">
                              <Input
                                type="password"
                                name="password2"
                                id="{password2}"
                                placeholder=" "
                                onChange={this.handleInputChange}
                              />
                            </InputGroup>
                          </form>
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup>
                      <Row className="justify-content-center">
                        <Col sm="3">
                          <Label for="oldpassword">ยืนยันรหัสผ่าน</Label>
                        </Col>
                        <Col sm={{ size: "4", offset: 0 }}>
                          <form onSubmit={this.handleSubmit}>
                            <InputGroup className="input-group-alternative mb-2">
                              <Input
                                type="password"
                                name="password3"
                                id="{password3}"
                                placeholder=" "
                                onChange={this.handleInputChange}
                              />
                            </InputGroup>
                            <div className="text-center">
                              <Button
                                className="mt-4"
                                color="success"
                                to="/staff/Profile"
                                tag={Link}
                              >
                                บันทึก
                              </Button>
                              <Button
                                className="mt-4"
                                /*ความสูง*/ color="danger"
                                type="button"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                ยกเลิก
                              </Button>
                            </div>
                          </form>
                        </Col>
                      </Row>
                    </FormGroup>
                    {/** */}
                  </Form>
                </CardBody>
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

export default Changepassword;
