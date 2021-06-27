import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
    },
    leftGrid: {
        backgroundColor: '#2A0F57'
    },
    rightGrid: {
        backgroundColor: "#EB5646"
    }
})

const BannerDetails = () => {
    const classes = useStyles()
    return (
        <main className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className={classes.leftGrid}>
                    <Container>
                        <Typography variant="h2">
                            Developers
                        </Typography>
                        <Typography variant="h3">
                            Free to Build. Freed from fixes.
                        </Typography>
                        <Typography variant="subtitle1">
                            Finally developers can build cool digital experiences faster with an agnostic framework that makes integrations across multiple channels a breeze.
                        </Typography>
                        <Button variant="contained" disableElevation className={classes.btn}>
                            LEARN MORE
                        </Button>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6} className={classes.rightGrid}>
                    <Typography variant="h2">
                        Developers
                    </Typography>
                    <Typography variant="h3">
                        Free to Build. Freed from fixes.
                    </Typography>
                    <Typography variant="subtitle1">
                        Finally developers can build cool digital experiences faster with an agnostic framework that makes integrations across multiple channels a breeze.
                    </Typography>
                    <Button variant="contained" disableElevation className={classes.btn}>
                        LEARN MORE
                    </Button>
                </Grid>
            </Grid>
        </main>
    );
}

export default BannerDetails;