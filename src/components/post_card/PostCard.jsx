import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import data from "../../data/data";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import TopBar from "../topbar/TopBar";

export const PostCard = (props) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  

  // function onPostHomeClick(props.pos){
  //   props.onHomeClick(props.pos);
  // }
  const NewPostCard = () => {

    console.log(props.loc);

    let cardData = data.dat[props.loc];

   console.log(cardData);

    const classes = useStyles();
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cardData.imgUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Link to="/post" style={{ textDecoration: "none", color: "black" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {cardData.head}
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
              {cardData.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };

  const onPostHomeClick = () =>{
    if(props.loc != 0){
      props.onHomeClick(props.loc);
    }
  }

  return (
    <div>
        <TopBar post={true} loc = {props.loc} onHomeClick = {onPostHomeClick()}></TopBar>
        <div className="div" style={{display:"flex"}}>
            <div style={{margin:"auto"}}>
            <NewPostCard />
            </div>
        </div>
    </div>
  );
};

export default PostCard;
