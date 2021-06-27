import Image from 'next/image'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import partner1 from '../public/images/partner1.png'
import partner2 from '../public/images/partner2.png'
import partner3 from '../public/images/partner3.png'
import partner4 from '../public/images/partner4.png'
import partner5 from '../public/images/partner5.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0 30px 0',
        textAlign: 'center'
    },
    img:{
        padding: '30px',
        margin: '20px'
    },
    btn: {
        backgroundColor: "#EB5646",
        padding: '5px 30px',
        margin: '0px 30px',
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: "30px",
        '&:hover': {
            backgroundColor: 'red',
            cursor: 'pointer'
        }
    },
    gridItem: {
        margin: '80px 0'
    },
    title : {
        color: '#2A0F57',
        fontWeight: '700',
        paddingBottom: "20px"
    },
    desc: {
        color: '#444444',
        paddingBottom: "20px"
    },
    details: {
        margin: "30px 0",
        fontSize: '24px'
    }
})

const Partners = () => {
    const classes = useStyles()
    const images = [
        {
            id: 1,
            img: partner1,
            name: 'partner1'
        },
        {
            id: 2,
            img: partner2,
            name: 'partner2'
        },
        {
            id: 3,
            img: partner3,
            name: 'partner3'
        },
        {
            id: 4,
            img: partner4,
            name: 'partner4'
        },
        {
            id: 5,
            img: partner5,
            name: 'partner5'
        }
    ]
    return ( 
        <main className={classes.root}>
            <Container>
                <Typography variant="h2" className={classes.title}>
                Our Partners are Catalysts for Success
                </Typography>
                <Typography variant="h6" className={classes.desc}>
                Industry-leading Technologies and Service Providers
                </Typography>
                <Grid container>
                    {
                        images.map(img => {
                            return <Grid key={img.id} className={classes.gridItem} item xs={4} md={2}>
                                <Image className={classes.img} width={120} height={60} src={img.img} alt={img.name} />
                            </Grid>
                        })
                    }
                </Grid>
                <Typography className={classes.details}>
                Our Catalysts are partners with years of experience accelerating projects with some of the industry's best-of-breed technologies.
                </Typography>
                <Button className={classes.btn}>
                    FIND A PARTNER
                </Button>
                <Button className={classes.btn}>
                    PARTNER OVERVIEW
                </Button>
            </Container>
        </main>
     );
}
 
export default Partners;