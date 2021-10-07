import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Icon } from 'semantic-ui-react';
import Typography from '@mui/material/Typography';

const ProjectBox = () => {

    const projects = [
        { 
            name: "RecipeBox", 
            info: "CERN based recipe app made with React, MongoDB, ..." ,
            links: [
                    "https://github.com/wuocci/pub-generator", 
                    "https://wuocci.github.io/pub-generator/"
            ]
        },
        {
            name: "Tampere Pub Generator", 
            info: "Our very own pub generator for Tampere. Tech used: ReactJS, MapBox API",
            links: [
                "https://github.com/wuocci/recipes"
        ]
        }
    ]

    console.log(projects)

    return (
        <div className="project-box">
            {projects.map((project) => (
              <Card key={project.name}>
                <CardContent>
                    <Typography variant="h1" component="header">
                       {project.name}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: 14 }} gutterBottom>
                        {project.info}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button basic animated color="orange" size="big">
                        <Button.Content visible>Git Repo</Button.Content>
                        <Button.Content hidden>
                            <Icon name='hand point right' />
                        </Button.Content>
                    </Button>
                    <Button basic animated color="orange" size="big">
                    <Button.Content visible>Demo</Button.Content>
                    <Button.Content hidden>
                        <Icon name='hand point right'/>
                    </Button.Content>
                    </Button>
                </CardActions>
            </Card>
            ))}
        </div>
    );
}

export default ProjectBox;