import styles from '../styles/Header.module.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        color: 'white',
        padding: '70px 0 50px 0',
        fontWeight: '700'
    },
    description: {
        color: 'white',
        fontWeight: '400'
    },
    btn: {
        backgroundColor : 'orange',
        color: 'black',
        fontSize: '18px',
        marginTop: '20px',
        padding: "5px 30px"
    }
})

const Header = () => {
    const classes = useStyles()
    return (
        <header className={styles.header}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <Typography variant='h3' className={classes.title} >
                        HOW DOES TRADITIONAL CMS MANAGE TO MANAGE SO BADLY?
                        </Typography>
                        <Typography variant='h6' className={classes.description} >
                        See how to empower teams, free developers, and get more done faster with headless, agile CMS.
                        </Typography>
                        <Button variant="contained" disableElevation className={classes.btn}>Play video</Button>
                    </Grid>
                    <Grid xs={12} md={3}>

                    </Grid>
                </Grid>
            </Container>
        </header>
    );
}

export default Header;