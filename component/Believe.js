import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../styles/Main.module.css'
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '600'
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
    btnOutline: {
        outlineColor: "#EB5646",
        border: '3px solid #EB5646',
        padding: '5px 30px',
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
        margin: '20px',
    }
})

const Believe = () => {
    const classes = useStyles()
    return (
        <main className={styles.believe}>
            <Container>
                <Typography variant='h2' className={classes.heading}>
                    TRY IT TO BELIEVE IT
                </Typography>
                <Button variant="contained" className={classes.btn}>
                    GET A DEMO
                </Button>
                <Button variant="outlined" className={classes.btnOutline}>
                    FREE TRAIL
                </Button>
            </Container>
        </main>
    );
}

export default Believe;