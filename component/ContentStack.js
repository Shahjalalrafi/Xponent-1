import Image from 'next/image'

import { Container, makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../styles/Main.module.css'

import image from '../public/images/WaveChart_Homepage.jpg'

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
        backgroundColor : '#EB5646',
        color: 'white',
        fontSize: '18px',
        marginTop: '20px',
        padding: "5px 30px"
    },
    img : {
        padding: "50px 0px 20px 0"
    }
})

const ContentStack = () => {
    const classes = useStyles()
    return (
        <main className={styles.mainBg}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xm={12} md={5}>
                        <Image 
                            className={classes.img}
                            width={400}
                            height={400} 
                            src={image} alt="" 
                        />
                    </Grid>
                    <Grid item xm={12} md={7}>
                        <Typography variant="h3" className={classes.title}>
                            Contentstack named a Strong Performer in the Forrester Wave for Agile CMS
                        </Typography>
                        <Typography variant="h6" className={classes.description}>
                            Contentstack named a Strong Performer in the Forrester Wave™ : Agile Content Management Systems (CMSes), Q1 2021
                        </Typography>
                        <Button variant="contained" disableElevation className={classes.btn}>Play video</Button>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default ContentStack;