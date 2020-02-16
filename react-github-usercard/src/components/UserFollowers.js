import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 250,
    },
});

const UserFollowers = (props) => {

    const classes = useStyles();
    return (
        <Grid container spacing={12} className="follower-cards">
            {props.userFollowers.map(follower => {
                console.log(follower)
                return (
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media} image={follower.avatar_url} alt="github-pictures"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">{follower.login}</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">Follow</Button>
                            <Button size="small" color="primary">Message</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </Grid>
    )
}





export default UserFollowers;