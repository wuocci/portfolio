import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, Icon } from "semantic-ui-react";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

const AboutBox = () => {
  let history = useHistory();

  const handleRouteProjects = () => {
    history.push("/projects");
  };

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
            onClick={handleRouteProjects}
            basic
            animated
            color="orange"
            size="big"
          >
            <Button.Content visible>My projects</Button.Content>
            <Button.Content hidden>
              <Icon name="hand point right" />
            </Button.Content>
          </Button>
          <Button basic animated color="orange" size="big">
            <Button.Content visible>About me</Button.Content>
            <Button.Content hidden>
              <Icon name="hand point right" />
            </Button.Content>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default AboutBox;
