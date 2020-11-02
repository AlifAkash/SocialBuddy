import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

const Comments = (props) => {

    const classes = useStyles();


    const { postId, id, name, email, body } = props.comment;

return (
    <div style={{
        marginBottom: "5px"
    }}>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Comment of the
                     PostId : {postId}
        </Typography>
                <Typography variant="h5" component="h2">
                    Name : {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    email: {email}
                </Typography>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                Comment Id : {id}
            </CardActions>
        </Card>
    </div>
);
};

export default Comments;