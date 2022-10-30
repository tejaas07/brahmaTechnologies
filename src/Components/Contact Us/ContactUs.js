import React from "react";
import { Container, Stack, Button } from "@mantine/core";
import "./ContactUs.css";
import ContactForm from "../Form/ContactForm";
import { TbBuilding, TbPhoneCalling, TbMail } from "react-icons/tb";
const ContactUs = () => {
  return (
    <Container className="container">
      <div className="header" id="contactUs">
        Contact Us
      </div>
      <div className="contactCtn">
        <div className="form">
          <ContactForm />
        </div>
        <div className="details">
          <div className="query">How can we help you ?</div>
          <div className="queryChild">
            Contact us via below given places else fill the the form to get a
            callback.
          </div>
          <div className="ctnContainer">
            <div className="cntcDetail">
              <span className="iconCtn">
                <TbBuilding className="icon" size="30" />
              </span>
              Visit Us At:
              <div className="detail">
                Office no 4 Prasanna building c wing,
                <br /> 2nd floor near mazgaon court, Mumbai, 400034
              </div>
            </div>
            <div className="cntcDetail">
              <TbPhoneCalling className="icon" size="30" />
              Contact Number:
              <div className="detail">+919833657199</div>
            </div>
            <div className="cntcDetail email">
              <TbMail className="icon" size="30" />
              Mail us at :
              <div className="detail">brahma.technologies@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
