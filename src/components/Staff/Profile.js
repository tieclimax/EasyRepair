import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {
  state = {
    redirect: false,
  };
  redirectHandler = () => {
    this.setState({ redirect: true });
    this.renderRedirect();
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="./Editprofile.js" />;
    }
  };
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
                        <div className="card-profile-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("assets/img/theme/team-4-800x800.jpg")}
                            />
                          </a>
                        </div>
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
                          onClick={this.redirectHandler}
                          to="/staff/Editprofile"
                          tag={Link}
                          color="primary"
                          size="sm"
                        >
                          <i className="ni ni-settings-gear-65">Settings</i>
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

export default Profile;
