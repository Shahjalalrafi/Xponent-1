import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import ReactPlayer from 'react-player';
import styles from '../styles/Main.module.css'
import CompromiseDetails from './CompromiseDetails'

const useStyles = makeStyles({
    root: {
        padding: '70px 0 20px 0'
    },
    heading: {
        fontWeight: '700',
        paddingBottom: '50px',
        color: '#EB5646',
    },
    btn: {
        backgroundColor : '#EB5646',
        color: 'white',
        fontSize: '18px',
        marginTop: '20px',
        padding: "5px 30px",
        '&:hover': {
            backgroundColor: 'red',
            cursor: 'pointer'
        }
    },
    title: {
        color: 'white',
        paddingBottom: '20px',
        paddingTop: '30px'
    },
    desc: {
        color: 'white',
        paddingBottom: '20px'
    }
})

const Compromise = () => {
    const classes = useStyles()
    return (
        <main className={styles.compromise}>
            <Container>
                <Typography variant="h2" className={classes.heading}>
                    Care Without Compromise<span>TM</span>
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' className={classes.title}>
                            We're obsessed with our customer's success
                        </Typography>
                        <Typography variant='subtitle1' className={classes.desc}>
                            Our Customer Care team provides exceptional whiteglove service with unprecedented response time to support customers' goals.
                        </Typography>
                        <Button className={classes.btn}>LEARN ABOUT CUSTOMER CARE</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <ReactPlayer url='https://youtu.be/djPpnQuBweM' />
                    </Grid>
                </Grid>
                <CompromiseDetails />
            </Container>
        </main>
    );
}

export default Compromise;