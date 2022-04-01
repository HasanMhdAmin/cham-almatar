import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import AOS from 'aos';
import ExperienceData from '../../../projectsResource/experience';

import Paper from '@material-ui/core/Paper';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '20px 20px',
        marginTop: "10px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function Experience() {
    AOS.init();
    const experienceData = ExperienceData
    const classes = useStyles();

    const styles = {
        background: {
            backgroundColor: "#ffffff",
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
            // marginTop: 50
        },
        jobTitle: {
            fontSize: 30,
            lineHeight: 1,
        },
        company: {
            fontSize: 20,
            marginTop: 7,
            lineHeight: 1.5,
            color: "#8c8c8c",
            textDecoration: "none",
        },
        uniIcon: {
            marginBottom: -7
        },
        removeOppositeContent: {
            flex: 0,
            content: "",
        },
        responsibilities: {
            fontSize: 18,
            marginLeft: 18,
            marginTop: 5,
        },
        image: {
            float: "right",
            maxWidth: 160,
            maxHeight: 60,
            marginBottom: 4,
        },
    };

    function getExperiences() {
        return experienceData.map(experience => (
            <Paper elevation={3} className={classes.paper}>

                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <div style={styles.jobTitle}>
                            <div dangerouslySetInnerHTML={{__html: experience.jobPosition}}/>
                        </div>
                        <a style={styles.company} href={experience.companyUrl} target={"blank"}>
                            <div dangerouslySetInnerHTML={{__html: experience.company}}/>
                            <div dangerouslySetInnerHTML={{__html: experience.duration}}/>
                        </a>
                    </Grid>
                    <Grid item xs={2}>
                        <a href={experience.companyUrl} target={"blank"}>
                            <img style={styles.image} src={process.env.PUBLIC_URL + experience.companyImageUrl}
                                 alt={experience.imageAlt}/>
                        </a>
                    </Grid>
                </Grid>

                <div style={styles.responsibilities}>
                    Responsibilities include:
                    <div dangerouslySetInnerHTML={{__html: experience.responsibilities}}/>
                </div>

                <div style={styles.responsibilities}>
                    <i>Used methods and tools:</i>
                    <div dangerouslySetInnerHTML={{__html: experience.tools}}/>
                </div>

            </Paper>
        ))
    }

    return (
        <div id="experience" style={styles.background}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={4}>

                        <div className={"fontStyle"}
                            // style={Object.assign(styles.titleSection, styles.paper)}>
                             style={styles.titleSection}>

                            <h1 className={"subheading"}>Professional<br/>Experience</h1>

                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <div id="landscape" className={"fontStyle"} style={styles.contentSection}>

                            <Timeline align="left">

                                {
                                    getExperiences().map(experiencePaper => (
                                        <TimelineItem
                                            data-aos="fade-left"
                                            data-aos-delay="200"
                                            data-aos-duration="500"
                                        >
                                            <TimelineOppositeContent style={styles.removeOppositeContent}/>
                                            <TimelineSeparator>
                                                <TimelineDot/>
                                                <TimelineConnector/>
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                {experiencePaper}
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }

                            </Timeline>
                        </div>

                        <div id="mobile" className={"fontStyle"} style={styles.contentSection}>
                            {getExperiences()}
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Experience;
