import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, Icon } from "semantic-ui-react";
import Typography from "@mui/material/Typography";
import metku from "../img/lastenMetku.png";
import manse from "../img/manse.png";

const ProjectBox = () => {
  const projects = [
    {
      name: "RecipeBox",
      info: "MERN Stack based recipe app. Tech used: ReactJS, ExpressJS, NodeJS, MongoDB",
      links: ["https://github.com/wuocci/recipes", ""],
    },
    {
      name: "Tampere Pub Generator",
      info: "Our very own pub generator for Tampere. Tech used: ReactJS, MapBox API",
      links: [
        "https://github.com/wuocci/pub-generator",
        "https://wuocci.github.io/pub-generator/",
      ],
      img: manse,
    },
    {
      name: "Metku",
      info: "Deisgn and production of accessible website for South-Karelias' Children's Culture Center. Tech used: Wordpress/Elementor & Figma in design",
      links: ["", "www.lastenmetku.fi"],
      img: metku,
    },
  ];

  console.log(projects);

  return (
    <div className="project-box">
      {projects.map((project) => (
        <Card key={project.name}>
          <CardContent>
            <Typography variant="h1" component="header">
              {project.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {project.info}
            </Typography>
            <img src={project.img} alt="wireframes from the website"></img>
          </CardContent>
          <CardActions>
            <>
              {project.links[0].length < 5 ? (
                <Button basic disabled color="orange" size="big">
                  <Button.Content visible>Git Repo</Button.Content>
                </Button>
              ) : (
                <Button
                  onClick={() => window.open(project.links[0])}
                  basic
                  animated
                  color="orange"
                  size="big"
                >
                  <Button.Content visible>Git Repo</Button.Content>
                  <Button.Content hidden>
                    <Icon name="github" />
                  </Button.Content>
                </Button>
              )}
            </>
            <>
              {project.links[1].length < 5 ? (
                <Button basic disabled color="orange" size="big">
                  <Button.Content visible>Demo</Button.Content>
                </Button>
              ) : (
                <Button
                  onClick={() => window.open(project.links[1])}
                  basic
                  animated
                  color="orange"
                  size="big"
                >
                  <Button.Content visible>Demo</Button.Content>
                  <Button.Content hidden>
                    <Icon name="hand point right" />
                  </Button.Content>
                </Button>
              )}
            </>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProjectBox;
