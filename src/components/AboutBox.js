import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, Icon } from "semantic-ui-react";
import Typography from "@mui/material/Typography";
import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useState, useEffect } from "react";
import CVurl from "../resources/CV.pdf";
import axios from "axios";

const AboutBox = () => {
  const [progress, setProgress] = useState(0);

  const handleGitRoute = () => {
    window.open("https://github.com/wuocci");
  };

  const handleCVClick = () => {
    var fileDownload = require("js-file-download");
    axios
      .get(CVurl, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "hw_cv.pdf");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 40
      );
    }, 800);
  }, []);

  return (
    <div className="about-box">
      <Card>
        <CardContent>
          <Typography variant="h1" component="header">
            Hello!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 14 }} gutterBottom>
            My name is Hannes and I'm a third year Computer Science student.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleGitRoute}
            basic
            animated
            color="orange"
            size="big"
          >
            <Button.Content visible>Github Repo</Button.Content>
            <Button.Content hidden>
              <Icon name="github" />
            </Button.Content>
          </Button>
          <Button
            onClick={handleCVClick}
            basic
            animated
            color="orange"
            size="big"
          >
            <Button.Content visible>CV</Button.Content>
            <Button.Content hidden>
              <Icon name="download" />
            </Button.Content>
          </Button>
        </CardActions>
        <div className="progress-bars">
          <ProgressBar label="HTML" now={progress + 40} />
          <ProgressBar label="CSS" now={progress + 40} />
          <ProgressBar label="React" now={progress + 30} />
          <ProgressBar label="Javascript" now={progress + 30} />
          <ProgressBar label="Figma" now={progress + 30} />
          <ProgressBar label="NodeJS" now={progress + 20} />
          <ProgressBar label="UX/UI Design" now={progress + 20} />
          <ProgressBar label="Python" now={progress + 10} />
          <ProgressBar label="Java" now={progress + 10} />
        </div>
      </Card>
    </div>
  );
};

export default AboutBox;
