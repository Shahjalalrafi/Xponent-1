import Image from 'next/image'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import img from '../public/images/partner3.png'

const useStyles = makeStyles({
    root: {
        padding: "50px 0",
    },
    img: {
        marginTop: '30px'
    },
    grid: {
        border: '20px solid #FFD433',
        padding: '30px'
    },
    btn: {
        backgroundColor: "#EB5646",
        padding: '5px 30px',
        marginTop: '20px',
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: "30px",
        '&:hover': {
            backgroundColor: 'red',
            cursor: 'pointer'
        }
    },
})

const Mack = () => {
    const classes= useStyles()
    return (
        <main className={classes.root}>
            <Container>
                <Grid container className={classes.grid}>
                    <Grid item xs={12} md={4} align='center'>
                    <Image className={classes.img} width={120} height={60} src={img} alt='Mack' />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography>
                            Contentstack is a founding member of the MACH Alliance, providing the industry leading best-of-breed CMS and Experience Management solutions via microservices, API-first, cloud-native SaaS, and headless technologies.
                        </Typography>
                        <Button className={classes.btn}>
                            LEARN MORE
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default Mack;