import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MainConfig from '../../../projectsResource/main_config';


function Contact() {
    const mainConfig = MainConfig

    const styles = {
        background: {
            paddingTop: 70,
            backgroundColor: "#eeeeee",
            paddingBottom: 50
        },
        title: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 25,
            lineHeight: 1,
            textAlign: 'center',
        },
        footer: {
            marginTop: 70,
            textAlign: "center"
        },
        hasanName: {
            textDecoration: "none",
            color: "#777777",
            fontWeight: "bold"
        },

    };

    const email = () => {
        if (mainConfig.contact.email != null)
            return <Grid item lg={3}>
                <div style={styles.item}>
                    <a href={"mailto:" + mainConfig.contact.email} target="_blank">
                        <EmailIcon color="primary" style={{fontSize: 50}}/>
                    </a>
                </div>
            </Grid>
        else
            return <div/>
    };

    const linkedin = () => {
        if (mainConfig.contact.linkedin != null)
            return <Grid item lg={3}>
                <a href={mainConfig.contact.linkedin} target="_blank">
                    <LinkedInIcon color="primary" style={{fontSize: 50}}/>
                </a>
            </Grid>
        else
            return <div/>
    };

    const github = () => {
        if (mainConfig.contact.github != null)
            return <Grid item lg={3}>
                <a href={mainConfig.contact.github} target="_blank">
                    <GitHubIcon color="primary" style={{fontSize: 50}}/>
                </a>
            </Grid>
        else
            return <div/>
    };

    const skype = () => {
        if (mainConfig.contact.skype != null)
            return <Grid item lg={3}>
                <a href={mainConfig.contact.skype} target="_blank">
                    <img style={{width: 50}} src={process.env.PUBLIC_URL + "/images/skype.svg"}
                         alt={"skype icon"}/>
                </a>
            </Grid>
        else
            return <div/>
    };

    const instagram = () => {
        if (mainConfig.contact.instagram != null)
            return <Grid item lg={2}>
                <a href={mainConfig.contact.instagram} target="_blank">
                    <InstagramIcon color="primary" style={{fontSize: 50}}/>
                </a>
            </Grid>
        else
            return <div/>
    };

    const footer = () => {
        if (mainConfig.showFooter)
            return <div style={styles.footer}>
                Developed️ by <a style={styles.hasanName} href="https://itshasan.de">me</a> using <a
                style={styles.hasanName} href="https://reactjs.org/"
                target="_blank">ReactJs</a>
            </div>
        else
            return <div/>
    };

    return (

        <div className={"footer"}>

            <div className={"footerContent"}>
                <div id="contact" style={styles.background} className={"fontStyle"}>
                    <Container maxWidth="sm">
                        <div className={"fontStyle"} style={styles.title}>
                            <h1 className={"subheading"}>Contact</h1>
                        </div>

                        <Grid container spacing={3}>

                            {email()}
                            {linkedin()}
                            {github()}
                            {skype()}
                            {instagram()}

                        </Grid>

                        {footer()}

                    </Container>
                </div>

            </div>


        </div>


    );
}

export default Contact;
