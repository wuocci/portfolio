import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, Icon } from "semantic-ui-react";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

const InfoBox = () => {
  let history = useHistory();

  const handleRouteProjects = () => {
    history.push("/projects");
  };

  const handleRouteAbout = () => {
    history.push("/about");
  };

  return (
    <div className="info-box">
      <Card>
        <CardContent>
          <Typography variant="h1" component="header">
            Hannes Wuorinen
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 14 }} gutterBottom>
            Computer Science student who has skills from full-stack
            web-development and a passion for accessible and usable design.
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
          <Button
            onClick={handleRouteAbout}
            basic
            animated
            color="orange"
            size="big"
          >
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

export default InfoBox;
