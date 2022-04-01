import React from 'react';
import '../../../App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SchoolIcon from '@material-ui/icons/School';
import EducationData from '../../../projectsResource/education';

function Education() {
    const educationData = EducationData

    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 24,
        },
        topMenu: {
            marginLeft: 30
        },
        background: {
            // paddingTop: 100,
            backgroundColor: "#ffffff",
            marginBottom: 400, // this is to achieve the footer behavior
            boxShadow: "0px 20px 20px 0px #00000014",
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
            paddingLeft: 40,
            marginBottom: 50
        },
        description: {
            fontSize: 18
        },
        detailedCV: {
            marginLeft: 18
        },
        uni: {
            fontSize: 25,
            marginLeft: 10,
            lineHeight: 0,
        },
        uniSub: {
            fontSize: 20,
            marginLeft: 50,
            color: "#8c8c8c",
            textDecoration: "none",
        },
        uniIcon: {
            marginBottom: -7
        }

    };

    return (
        <div id="education" style={styles.background}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item md={4}>

                        <div className={"fontStyle"}
                             style={styles.titleSection}>
                            <h1 className={"subheading"}>Education</h1>
                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <div className={"fontStyle"} style={styles.contentSection}>
                            {educationData.map(institute =>
                                <div>
                                    <SchoolIcon fontSize="large" style={styles.uniIcon}/> <span
                                    style={styles.uni}> {institute.certificate}</span>
                                    <br/>
                                    <a style={styles.uniSub} href={institute.instituteUrl} target={"blank"}>
                                        {institute.institute}
                                    </a>
                                </div>
                            )}
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Education;
