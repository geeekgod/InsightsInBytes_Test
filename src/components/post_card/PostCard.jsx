import React, { useState, useEffect } from "react";
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
  useParams, Link
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

  let { slug } = useParams();
  const [locationBlog, setLocationBlog] = useState(0);
  const [loadLocation, setLoadLocation] = useState(true);

  if (loadLocation == true) {
    data.dat.map((item, pos) => {
      if (slug == item.url) {
        setLocationBlog(locationBlog + pos);
        setLoadLocation(false);
      }
    })
  }
  let cardData = data.dat[locationBlog];
  useEffect(() => {
    setLoadLocation(true);
    setLocationBlog(0);
    window.scrollTo(0, 0);
    document.title = cardData.head;
  }, []);

  const NewPostCard = () => {
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
            <Typography gutterBottom variant="h5" component="h2">
              {cardData.head}
            </Typography>
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

  return (
    <div>
      <TopBar post={true}></TopBar>
      <div className="div" style={{ display: "flex" }}>
        <div style={{ margin: "auto" }}>
          <NewPostCard />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
