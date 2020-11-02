import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Post = (props) => {

    const classes = useStyles();

    const history = useHistory();

    const { title, body, id } = props.post;

    const handleSeeMoreButton = (postsId) => {
        const url = `/post/${postsId}`;
        history.push(url);
        console.log(postsId)
    }
    return (
        <div style={{
            marginBottom: "5px"
        }}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                         User Name :<br/>    
        </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                         Post :
        </Typography>
                    <Typography variant="body2" component="p">
                        {body}
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={() => handleSeeMoreButton(id)}
                        >See More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;