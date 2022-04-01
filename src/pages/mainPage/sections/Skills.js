import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AOS from 'aos';
import SkillsData from '../../../projectsResource/skills';

function Skills() {
    AOS.init();
    const skillsData = SkillsData
    const styles = {
        background: {
            paddingTop: 70,
            backgroundColor: "#eeeeee",
            paddingBottom: 50,
        },
        title: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            fontSize: 25,
            lineHeight: 1,
            textAlign: 'center',
        },
        item: {
            textAlign: "center",
        },
        image: {
            textAlign: "center",
            maxWidth: 160,
        },
        section: {
            padding: 18,
            paddingTop: 3,
            minHeight: 170
        },
        sectionWrapper: {
            // paddingBottom: 70,
        },
        responsibilities: {
            fontSize: 18,
        }
    };

    return (
        <div id="skills" style={styles.background} className={"fontStyle"}>
            <Container maxWidth="lg">
                <div className={"fontStyle"} style={styles.title}>
                    <h1 className={"subheading"}>Skills</h1>
                </div>

                <Grid container spacing={3}>

                    {skillsData.focus.map((focusItem, index) => (
                        <Grid item md={12 / skillsData.focusItemInRow} xs={12}
                              data-aos="fade-up"
                              data-aos-delay={index * 400 + 400}
                              data-aos-duration="1000">
                            <div style={styles.item}>
                                <img style={styles.image} src={process.env.PUBLIC_URL + focusItem.image}
                                     alt={focusItem.alt}/>
                                <h1 className={"subheading"}>{focusItem.title}</h1>
                            </div>
                        </Grid>
                    ))}

                </Grid>

                <Grid container spacing={3}>

                    {skillsData.fields.map((field, index) => (
                        <Grid item md={6} xs={12}
                              data-aos="fade-up"
                              data-aos-delay={index % 2 === 0 ? 400 : 800}
                              data-aos-duration="1000">
                            <Paper elevation={3} style={styles.section}>
                                <h1 className={"subheading"}>{field.title}</h1>
                                <div style={styles.responsibilities}>
                                    {field.description}
                                </div>
                            </Paper>
                        </Grid>
                    ))}

                </Grid>

            </Container>
        </div>

    );
}

export default Skills;
