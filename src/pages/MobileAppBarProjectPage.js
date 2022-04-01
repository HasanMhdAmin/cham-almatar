import React from 'react';
import '../App.css';
import Button from "@material-ui/core/Button";


import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-scroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function MobileAppBarProjectPage() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 30,
            cursor: "pointer",
        },
        hamburger: {
            marginRight: 10,
        },
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            // className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={"home"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host;
                        window.location.replace(url);
                    }}>
                        Home
                    </Button>
                </ListItem>

                <ListItem button key={"skills"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/skills";
                        window.location.replace(url);
                    }}>
                        Skills
                    </Button>
                </ListItem>
                <ListItem button key={"experience"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/experience";
                        window.location.replace(url);
                    }}>
                        Experience
                    </Button>
                </ListItem>
                <ListItem button key={"projects"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/projects";
                        window.location.replace(url);
                    }}>
                        Projects
                    </Button>
                </ListItem>
                <ListItem button key={"education"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/education";
                        window.location.replace(url);
                    }}>
                        Education
                    </Button>
                </ListItem>
                <ListItem button key={"contact"}>
                    <Button color="inherit" onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host + "#/home/contact";
                        window.location.replace(url);
                        setTimeout(() => {
                            window.scrollTo({
                                behavior: document.body.scrollHeight ? "smooth" : "auto",
                                top: document.body.scrollHeight
                            });
                        }, 1000);
                    }}>
                        Contact
                    </Button>
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <AppBar id="mobile" position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        style={styles.hamburger}
                        color="inherit" aria-label="menu"
                        onClick={toggleDrawer("left", true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box style={styles.name} onClick={() => {
                        let url = window.location.protocol + "//" + window.location.host;
                        window.location.replace(url);
                    }}>
                        Hasan Mhd Amin
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </>

    );
}

export default MobileAppBarProjectPage;
