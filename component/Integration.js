import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


import coudinary from '../public/images/cloudinary-icon-logo.png'
import elasticSearch from '../public/images/elasticsearch-thumb-logo.png'
import commercetools from '../public/images/commercetools-logo-thumb-icon.png'
import googleanlytics from '../public/images/thumb-icon-ga.png'
import shopify from '../public/images/thumb-icon-shopify.png'
import bynder from '../public/images/bynder-icon-logo.png'
import branfolder from '../public/images/brandfolder-icon-logo.png'
import gatsby from '../public/images/gatsby-monogram-logo.png'
import dynamicYeild from '../public/images/dynamic-yield-logo.png'
import translations from '../public/images/translations.com-full-logo.png'
import ibm from '../public/images/logo-inseego.jpg'

const useStyles = makeStyles({
    root: {
        padding: '70px 0 30px 0',
        textAlign: 'center'
    },
    heading: {
        color: '#2A0F57',
        fontWeight: '700',
        paddingBottom: "20px"
    },
    headingDesc : {
        color: '#444444',
        paddingBottom: "20px"
    },
    btn: {
        backgroundColor: "#EB5646",
        padding: '5px 30px',
        color: 'white',
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: "30px",
        '&:hover': {
            backgroundColor: 'red',
            cursor: 'pointer'
        }
    },
    item: {
        color: '#2A0F57',
        margin: "20px",
    },
    itemName : {
        color: '#2A0F57',
        marginTop: '15px'
    }
})

const Integration = () => {
    const classes = useStyles()
    const industry = [
        {
            img: coudinary,
            name: 'Coudinary'
        },
        {
            img: elasticSearch,
            name: "elasticSearch"
        },
        {
            img: commercetools,
            name: 'commercetools'
        },
        {
            img: googleanlytics,
            name: 'googleanlytics'
        },
        {
            img: shopify,
            name: 'shopify'
        },
        {
            img: bynder,
            name: 'bynder'
        },
        {
            img: branfolder,
            name: 'branfolder'
        },
        {
            img: gatsby,
            name: 'gatsby'
        },
        {
            img: dynamicYeild,
            name: 'dynamicYeild'
        },
        {
            img: translations,
            name: 'translations'
        },
        {
            img: ibm,
            name: 'ibm Watson'
        },
    ]

    return ( 
        <main className={classes.root}>
            <Container>
                <Typography variant='h3' className={classes.heading} align='center'>
                Integrations for Every Industry
                </Typography>
                <Typography variant='subtitle1' className={classes.headingDesc} align='center'>
                Our API-first headless CMS makes it easy. Easily integrate your preferred business and marketing technologies to meet your needs.
                </Typography>
                <Button className={classes.btn} varian="contained" align='center'>SEE ALL INTEGRATION</Button>
                <Grid container>
                    {
                        industry.map(item=> {
                            return <Grid key={item.name} className={classes.item} item xs={6} md={3} lg={2}>
                                <Image 
                                className={classes.img} 
                                src={item.img} 
                                alt={item.name}
                                width={70}
                                height={70} 
                             />
                                <Typography className={classes.itemName}>
                                    {item.name}
                                </Typography>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </main>
     );
}
 
export default Integration;