import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classnames from "classnames";

import toast, { Toaster } from "react-hot-toast";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_14hjbfw",
        "template_7mfynys",
        form.current,
        "tWCy5FaCnn9QFElzu"
      )
      .then(
        (result) => {
          toast.success("Message sent!", {
            position: "bottom-center",
          });
        },
        (error) => {
          toast.error("Message failed to send!", {
            position: "bottom-center",
          });
        }
      );
  };

  return (
    <>
      <section
        className="section section-shaped"
        style={{ paddingBottom: "6rem" }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-purple shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1 text-white">Want to work with me?</h4>
                    <p className="mb-1 text-white">
                      Or just plain talk? My inbox is open for all.
                    </p>
                    <p className="mt-0 text-white">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames("mt-5", {})}>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round bg-transparent border-white"
                        color="default"
                        size="lg"
                        type="submit"
                        onClick={sendEmail}
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
        <Toaster />
      </section>
    </>
  );
};

export default ContactUs;
