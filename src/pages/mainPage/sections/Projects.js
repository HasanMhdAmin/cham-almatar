import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ProjectsData from '../../../projectsResource/projects';
import AOS from 'aos';
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {makeStyles} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";


const useStyles = makeStyles((theme) => ({

    divider: {
        margin: theme.spacing(1, 0.5),
    },
    overflow: "auto",
    whiteSpace: "nowrap",
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        background: "#ffffff",
        border: 'none',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

function Projects() {
    AOS.init();
    const classes = useStyles();
    const [filterValue, setFilterValue] = React.useState("all");

    const projectsDate = ProjectsData
    const styles = {
        background: {
            backgroundColor: "#eeeeee",
            paddingBottom: 50,
        },
        titleSection: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 25,
            lineHeight: 1,
            textAlign: 'right',
        },
        contentSection: {
            marginTop: 50,
            // paddingBottom: 50,
        },
        projectsSection: {
            marginTop: 20,
        },
        card: {},
        media: {
            height: 140,
        },
        paper: {
            display: "inline-block",
            border: `none`,
            flexWrap: 'wrap',
        },
        title: {
            fontSize: 21
        },
        desc: {
            fontSize: 16,
            lineHeight: 1.5,
            color: "#949494",
            minHeight: 70
        },
        cardIcon: {
            maxWidth: 25
        },
        mobileFix: {
            marginTop: "0px !important"
        }
    };

    const handleCategoryChange = (event, newAlignment) => {
        setFilterValue(newAlignment);
    };

    const handleChange = (event) => {
        setFilterValue(event.target.value);
    };


    return (
        <div id="projects" style={styles.background}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item md={4}>

                        <div className={"fontStyle"}
                             style={styles.titleSection}>

                            <h1 className={"subheading"}>Projects</h1>

                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}
                          // style={styles.contentSection}
                    >
                        <div className={"fontStyle"}>

                            <Paper
                                id={"landscape"}
                                // style={styles.paper}
                                style={Object.assign(styles.paper, styles.contentSection)}>

                                <StyledToggleButtonGroup
                                    value={filterValue}
                                    exclusive
                                    onChange={handleCategoryChange}
                                    aria-label="text alignment"
                                >
                                    <ToggleButton value="all" aria-label="centered">
                                        All
                                    </ToggleButton>
                                    <ToggleButton value="professional" aria-label="centered">
                                        Professional
                                    </ToggleButton>
                                    <ToggleButton value="personal" aria-label="centered">
                                        Personal
                                    </ToggleButton>
                                    <ToggleButton value="mobile" aria-label="centered">
                                        Mobile
                                    </ToggleButton>
                                    <ToggleButton value="web" aria-label="centered">
                                        Web
                                    </ToggleButton>
                                </StyledToggleButtonGroup>
                            </Paper>

                            <FormControl style={styles.mobileFix}
                                         id="mobile"
                                         variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                <Select
                                    value={filterValue}
                                    onChange={handleChange}
                                    label="Category"
                                >
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="professional">Professional</MenuItem>
                                    <MenuItem value="personal">Personal</MenuItem>
                                    <MenuItem value="mobile">Mobile</MenuItem>
                                    <MenuItem value="web">Web</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <Grid
                            container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            style={styles.projectsSection}
                        >

                            {projectsDate.filter(pr => pr.filters.includes(filterValue)).map(project => (
                                <Grid item xs={12} sm={6} md={4} key={projectsDate.indexOf(project)}>
                                    <Card style={styles.card}>
                                        <CardActionArea onClick={event => {
                                            let url = window.location.protocol + "//" + window.location.host + "#" + "/project/" + project.projectName;
                                            window.location.replace(url);
                                        }}>
                                            <CardMedia
                                                style={styles.media}
                                                image={process.env.PUBLIC_URL + "/images/projects/" + project.heroImage}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <div className={"fontStyle"} style={styles.title}>
                                                    {project.projectName}
                                                </div>
                                                <div className={"fontStyle"} style={styles.desc}>
                                                    {project.shortDesc}
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>

                                            {project.filters.includes("mobile")
                                                ? <img style={styles.cardIcon}
                                                       src={process.env.PUBLIC_URL + "/images/mobile.svg"}
                                                       alt={"mobile icon"}/>
                                                : ""
                                            }
                                            {project.filters.includes("web")
                                                ? <img style={styles.cardIcon}
                                                       src={process.env.PUBLIC_URL + "/images/web.svg"}
                                                       alt={"web icon"}/>
                                                : ""
                                            }

                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Projects;
