import logii from "./image/logo.png";
import "./App.css";
import React, { useState } from "react";
import { AppointmentPicker } from "react-appointment-picker";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [loading, setLoading] = useState(false);

  const days = [
    [
      { id: 1, number: 1, isSelected: true, periods: 2 },
      { id: 2, number: 2 },
      null,
      { id: 3, number: "3", isReserved: true },
      { id: 4, number: "4" },
      null,
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    [
      { id: 7, number: 1, isReserved: true, periods: 3 },
      { id: 8, number: 2, isReserved: true },
      null,
      { id: 9, number: "3", isReserved: true },
      { id: 10, number: "4" },
      null,
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      null,
      { id: 15, number: 3, isReserved: true },
      { id: 16, number: "4" },
      null,
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1 },
      { id: 20, number: 2 },
      null,
      { id: 21, number: 3 },
      { id: 22, number: "4" },
      null,
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2 },
      null,
      { id: 27, number: "3", isReserved: true },
      { id: 28, number: "4" },
      null,
      { id: 29, number: 5 },
      { id: 30, number: 6, isReserved: true },
    ],
  ];
  return (
    <Container>
      <Row className="py-5 justify-content-center">
        <Col sm={12}>
          <Card className="card_b">
            <Row className="">
              <Col sm={5} className="brd_right">
                <div className="sticky">
                  <div className="text-center brd_btm">
                    <img src={logii} className="logo_im" />
                  </div>
                  <div className="">
                    <Image src={logii} className="prof_im" />
                    <p className="mb-0">Business Compass LLC</p>
                    <p className="on_on">usmarkets.ai</p>
                    <div className="media">
                    <MdOutlineAccessTime className="ico_so" />
                      <div className="media-body">
                        <h5 className="mt-0">30 min</h5>
                      </div>
                    </div>
                    <div className="media">
                      <MdOutlineVideocam className="ico_so" />
                      <div className="media-body">
                        <h5 className="mt-0">Web conferencing details provided upon confirmation.</h5>
                      </div>
                    </div>
                    <div className="none_mobile">
                      <h1 className="ma_tit mb-2 mt-4">Appointment List</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={7} className="my-4">
                <div className="ps-sm-3">
                  <AppointmentPicker
                    initialDay={new Date("2018-05-05")}
                    days={days}
                    maxReservableAppointments={3}
                    alpha
                    visible
                    selectedByDefault
                    loading={loading}
                  />
                  <div className="">
                    <p className="on_on">Enter Details</p>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Enter Name*</Form.Label>
                          <Form.Control type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address*</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <p className="on_on mt-4">What you are looking for?</p>
                        <div class="h_don_form">
                          <p><input type="checkbox" id="test1" name="radio-group" />
                            <label for="test1">AWS Migration</label>
                          </p>
                          <p><input type="checkbox" id="test2" name="radio-group" /><label for="test2">AWS Set Up</label>
                          </p>
                          <p><input type="checkbox" id="test3" name="radio-group" /><label for="test3">AI/ML</label>
                          </p>
                          <p><input type="checkbox" id="test4" name="radio-group" /><label for="test4">Generative AI</label>
                          </p>
                          <p><input type="checkbox" id="test7" name="radio-group" /><label for="test7">Media</label>
                          </p>
                          <p><input type="checkbox" id="test9" name="radio-group" /><label for="test9">Security</label>
                          </p>
                          <p><input type="checkbox" id="test8" name="radio-group" /><label for="test8">Mobile App</label>
                          </p>
                          <p><input type="checkbox" id="test6" name="radio-group" /><label for="test6">Document Processing</label>
                          </p>
                          <p><input type="checkbox" id="test10" name="radio-group" /><label for="test10">Web</label>
                          </p>
                          <p><input type="checkbox" id="test11" name="radio-group" /><label for="test11">Other </label>
                          </p>
                        </div>
                        <p className="note_en">By proceeding, you confirm that you have read and agree to <a target="_blank" href="https://businesscompassllc.com/terms-of-service/"> Terms of Use</a> and <a target="_blank" href="https://businesscompassllc.com/privacy-policy/">Privacy Policy.</a></p>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
