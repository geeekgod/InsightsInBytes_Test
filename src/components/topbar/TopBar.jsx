import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './topbar.css';
import {
  BrowserRouter as Router,
  Link,
  useLocation,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const location = useLocation().pathname;
  console.log(location);

  return (
    <div className="TopBar">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {
              props.post ? 'Post'
              : 'InsightsInBytes'
            }
          </Typography>
          {
            props.post ? <Link  style={{textDecoration:"none" , color:"#fff"}} to = "/feed" > <Button color="inherit">Home</Button></Link>
            : null
          }
          <Button color="inherit"><Link to="/">Login</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
