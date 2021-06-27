import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const useStyles = makeStyles({
    root: {
        padding: '70px 0 20px 0'
    },
    heading: {
        fontWeight: '700',
        paddingBottom: '50px'
    },
    card: {
        padding: '10px',
        width: '100%',
        '&:hover': {
            backgroundColor: '#F1EDFF',
            cursor: 'pointer'
        }
    },
    title: {
        color: "#7C4DFF",
        fontSize: '20px',
        fontWeight: '500'
    },
    videoContainer: {
        backgroundColor: "#EFEFEF",
        border: '1px solid black',
        margin: '0px 0 50px 50px',
        width: '750px'
    },
    video: {
        margin: '70px 0 50px 50px',
        width: '200px'
    }
})

const ChoseStack = () => {
    const classes = useStyles()

    const stacks = [
        {
            id: '1',
            title: 'Creating Content Faster',
            details: 'Intuitively designed so marketers can do more faster, flying solo - developers rejoice.',
            videoLink: "https://youtu.be/5Piwk5gRJfY"
        },
        {
            id: '2',
            title: 'Managing Content Easier',
            details: 'Get more content in more places with less hassle - on one platform.',
            videoLink: "https://youtu.be/as710dBR2t4"
        },
        {
            id: '2',
            title: 'Made for the Enterprise',
            details: 'Built in the cloud to scale with exceptional support to accelerate your digital strategy.',
            videoLink: "https://youtu.be/ukkDzz9ykRk"
        }
    ]
    const [video, setVideo] = useState(stacks[0].videoLink)
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant="h3" className={classes.heading} align='center'>
                    Why Choose Contentstack?
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            {
                                stacks.map(stack => {
                                    return <Card key={stack.id}
                                        disableElevation
                                        onClick={() => setVideo(stack.videoLink)}
                                        className={classes.card}>
                                        <CardContent>
                                            <Typography variant='h4' className={classes.title}>
                                                {stack.title}
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography variant="subtitle1" className={classes.description}>
                                                {stack.details}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.videoContainer}>
                        <ReactPlayer url={video} className={classes.video} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </main>
                );
}

                export default ChoseStack;