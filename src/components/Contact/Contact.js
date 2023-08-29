import React, { useRef, useState } from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { TextField, Button, Typography, Box } from "@mui/material";
import emailjs from '@emailjs/browser';

const ContactRes = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_obslklo', 'template_klnn07k', form.current, 'X7XWEZKvvjfcqsf8W')
    .then((result) => {
        console.log(result.text);
        setEmail("");
        setMessage("");
        setName("");
    }, (error) => {
        console.log(error.text);
    });    //
  };
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact </span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">00216 56 100 591</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">00216 56 100 591</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">00216 56 100 591</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">00216 56 100 591</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
          <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
                <Typography variant="h4" align="center" mb={2}>
                  Contact Us
                </Typography>
                <form ref={form} onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </form>
              </Box>
            </Box>          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRes;
