import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        maxWidth: 10,
    },
    media: {
        height: 750 ,
    },
});

const UserCard = (props) => {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                            <CardMedia style={{width: "50%", margin: "0 auto"}}
                                className={classes.media} image={props.userData.avatar_url} alt="github-pic"/>
                            <CardContent>
                                <Typography style={{margin: '0 auto'}}gutterBottom variant="h5" component="h2">{props.userData.name}</Typography>
                                <Typography gutterBottom variant="h5" component="h2">{props.userData.login}</Typography>
                            </CardContent>
                        </CardActionArea>
        </Card>
    ) 

}
export default UserCard;