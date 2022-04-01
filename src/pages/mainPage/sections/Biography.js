import React from 'react';
import '../../../App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from '@material-ui/icons/GetApp';
import {Link} from 'react-scroll';
import MobileAppBar from "../../MobileAppBar";
import BiographyData from '../../../projectsResource/biography';
import MainConfig from '../../../projectsResource/main_config';


function Biography() {
    const biographyData = BiographyData
    const mainConfig = MainConfig
    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 30,
            cursor: "pointer",
        },
        topMenu: {
            marginLeft: 30
        },
        hamburger: {
            marginRight: 10,
        },
        cvHeader: {
            paddingBottom: 50,
            paddingTop: 100,
            backgroundColor: "#ffffff"
        },
        userAvatar: {
            margin: "auto",
            width: 270,
            height: 270,
        },
        profileSection: {
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: 'center',

        },
        profileName: {
            fontSize: 40,
            marginTop: 10
        },
        profileExperience: {
            fontSize: 20,
            marginBottom: 20,
        },
        biography: {
            fontSize: 18,
        },
        cvLink: {
            textDecoration: "none",
        },
        detailedCV: {
            marginLeft: 18
        },
    };

    const email = () => {
        if (mainConfig.contact.email != null)
            return <a href={"mailto:" + mainConfig.contact.email} target="_blank">
                <EmailIcon color="primary" style={{fontSize: 50}}/>
            </a>
        else
            return <div/>
    };

    const linkedin = () => {
        if (mainConfig.contact.linkedin != null)
            return <a href={mainConfig.contact.linkedin} target="_blank">
                <LinkedInIcon color="primary" style={{fontSize: 50}}/>
            </a>
        else
            return <div/>
    };

    const github = () => {
        if (mainConfig.contact.github != null)
            return <a href={mainConfig.contact.github} target="_blank">
                <GitHubIcon color="primary" style={{fontSize: 40, margin: 5}}/>
            </a>
        else
            return <div/>
    };

    return (
        <div id="home" className={"fontStyle"}>
            <AppBar position="fixed"

            >
                <Container maxWidth="lg">
                    <Toolbar
                        id="landscapeFlex">
                        <Box style={styles.name} onClick={() => {
                            let url = window.location.protocol + "//" + window.location.host;
                            window.location.replace(url);
                        }}>
                            {mainConfig.name}
                        </Box>

                        <Box style={styles.topMenu}>

                            <Link to="home" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Home
                                </Button>
                            </Link>
                            <Link to="skills" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Skills
                                </Button>
                            </Link>
                            <Link to="experience" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Experience
                                </Button>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Projects
                                </Button>
                            </Link>
                            <Link to="education" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Education
                                </Button>
                            </Link>
                            <Button color="inherit" onClick={() => {
                                window.scrollTo({
                                    behavior: document.body.scrollHeight ? "smooth" : "auto",
                                    top: document.body.scrollHeight
                                });
                            }}>
                                Contact
                            </Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            <MobileAppBar/>

            <header style={styles.cvHeader}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item sm={4} xs={12}>
                            <div style={styles.profileSection}>
                                <div>
                                    <Avatar alt={mainConfig.name + " photo"}
                                            src={process.env.PUBLIC_URL + mainConfig.picture}
                                            style={styles.userAvatar}/>

                                    <div className={"fontStyle heading"}
                                         style={styles.profileName}>{mainConfig.name}</div>
                                    <div className={"fontStyle subheading"} style={styles.profileExperience}>
                                        <div dangerouslySetInnerHTML={{__html: mainConfig.headline}}/>
                                    </div>

                                    {email()}
                                    {linkedin()}
                                    {github()}

                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} style={styles.biography}>
                            <div className={"fontStyle"}>
                                <h1 className={"fontStyle"}>Biography</h1>
                                <div dangerouslySetInnerHTML={{__html: biographyData.biography}}/>
                            </div>

                            <a style={styles.cvLink}
                               href={mainConfig.cvUrl}
                               target="_blank">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<GetAppIcon/>}
                                >
                                    Download C.V.
                                </Button>
                            </a>

                        </Grid>
                    </Grid>
                </Container>

            </header>
        </div>

    );
}

export default Biography;
