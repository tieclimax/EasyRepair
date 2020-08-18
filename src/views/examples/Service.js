import React, { Component } from "react";
import classnames from "classnames";
import "../../assets/css/style.css";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
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
  Label,
} from "reactstrap";
class Service extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-8">
              <Row className="justify-content-center">
                <Col lg="10">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-1">
                      <div className="text-muted text-center mb-3">
                        <p>ระบบการแจ้งซ่อม</p>
                      </div>
                      <div className="text-center"></div>
                    </CardHeader>
                    <CardBody className="px-lg-3 py-lg-3">
                      <div className="text-center text-muted mb-2">
                        <h5>อัพโหลดรูปภาพอุปกรณ์ที่ชำรุด</h5>
                      </div>
                      <Form role="form">
                        <FormGroup className="center mx-4 col-md-6">
                          <div>
                            <Input
                              className="upload-btn my-4 "
                              color="info"
                              type="file"
                            >
                              อัพโหลดรูปภาพ
                            </Input>
                          </div>
                        </FormGroup>

                        <FormGroup>
                          <div>
                            <img
                              alt="..."
                              className=" img-center img-fluid shadow shadow-lg--hover"
                              src={require("assets/img/theme/example1.jpg")}
                              style={{ width: "250px" }}
                            />
                          </div>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="upload-btn my-4 "
                            color="success"
                            type="button"
                          >
                            ระบุพิกัดของสถานที่
                          </Button>
                        </div>

                        <FormGroup className="center col-md-6 ">
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-compass-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="สถานที่ของคุณ" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <div className="text-center text-muted mb-2">
                            <h5>อัพโหลดรูปภาพอุปกรณ์ที่ชำรุด</h5>
                          </div>
                        </FormGroup>
                        <FormGroup className="center mx-4 col-md-6">
                          <div>
                            <Input
                              className="upload-btn my-4 "
                              color="info"
                              type="file"
                            >
                              อัพโหลดรูปภาพ
                            </Input>
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <div>
                            <img
                              alt="..."
                              className=" img-center img-fluid shadow shadow-lg--hover"
                              src={require("assets/img/theme/example2.jpg")}
                              style={{ width: "250px" }}
                            />
                          </div>
                        </FormGroup>
                        <FormGroup className="row col-lg-12  ml-1 justify-content-center">
                          <FormGroup className=" col-md-6">
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>อาคาร/ตึก</InputGroupText>
                                <InputGroupText>
                                  <i className="ni ni-building" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="" type="text" />
                            </InputGroup>
                          </FormGroup>
                        </FormGroup>
                        <FormGroup className="row  col-lg-12 ml-1 justify-content-center">
                          <FormGroup className="  col-md-3">
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>ชั้น</InputGroupText>
                                <InputGroupText>
                                  <i className="ni ni-building" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="  col-md-3">
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>ห้อง</InputGroupText>
                                <InputGroupText>
                                  <i className="ni ni-building" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="" type="text" />
                            </InputGroup>
                          </FormGroup>
                        </FormGroup>
                        <Row className="textarea justify-content-center">
                          <FormGroup className="col-md-6">
                            <Input
                              type="textarea"
                              name="text"
                              id="textarea"
                              placeholder="หมายเหตุ"
                            />
                          </FormGroup>
                        </Row>
                        <Row className="col-12 justify-content-center">
                          <FormGroup className="col-6">
                            <div className="text-center">
                              <Button
                                className="mt-4"
                                color="primary"
                                type="button"
                              >
                                ส่ง
                              </Button>
                            </div>
                          </FormGroup>
                          <FormGroup className="col-6">
                            <div className="text-center">
                              <Button
                                className="mt-4"
                                color="secondary"
                                type="button"
                              >
                                ยกเลิก
                              </Button>
                            </div>
                          </FormGroup>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Service;
