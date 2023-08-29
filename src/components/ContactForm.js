import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "./ContactStyles.css";
import { MdCall } from "react-icons/md";


export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form value", e.value);
    //
  };

  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>{" "}
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span> Call </span>
                    <span> +216 56 100 591 </span>
                  </div>
                </div>
                <div className="flexCenter button"> call now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="form-container">
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
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
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
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
