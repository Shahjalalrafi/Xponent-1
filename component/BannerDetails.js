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
    },
    section: {
        padding: '120px'
    },
    maintitle: {
        color: 'white',
        fontWeight: '600'
    },
    title: {
        color: "#EB5646",
        fontWeight: '600'
    },
    details : {
        color: 'white',
        fontSize: '20px',
        margin:'20px 0px'
    },
    btn: {
        backgroundColor: "#EB5646",
        padding: '5px 30px',
        margin: '20px',
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
        
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'red',
            cursor: 'pointer'
        }
    },
    btnblue: {
        backgroundColor: '#2A0F57',
        padding: '5px 30px',
        margin: '20px',
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
        
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'black',
            cursor: 'pointer'
        }
    }
})

const BannerDetails = () => {
    const classes = useStyles()
    return (
        <main className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className={classes.leftGrid}>
                    <Container className={classes.section}>
                        <Typography variant="h2" className={classes.maintitle}>
                            Developers
                        </Typography>
                        <Typography variant="h3" className={classes.title}>
                            Free to Build. Freed from fixes.
                        </Typography>
                        <Typography variant="subtitle1"  className={classes.details}>
                            Finally developers can build cool digital experiences faster with an agnostic framework that makes integrations across multiple channels a breeze.
                        </Typography>
                        <Button variant="contained" disableElevation className={classes.btn}>
                            LEARN MORE
                        </Button>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6} className={classes.rightGrid}>
                    <Container className={classes.section}>
                    <Typography variant="h2" className={classes.maintitle}>
                        Developers
                    </Typography>
                    <Typography variant="h3">
                        Free to Build. Freed from fixes.
                    </Typography>
                    <Typography variant="subtitle1" className={classes.details}>
                        Finally developers can build cool digital experiences faster with an agnostic framework that makes integrations across multiple channels a breeze.
                    </Typography>
                    <Button variant="contained" disableElevation className={classes.btnblue}>
                        LEARN MORE
                    </Button>
                    </Container>
                </Grid>
            </Grid>
        </main>
    );
}

export default BannerDetails;