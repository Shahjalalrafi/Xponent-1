import Image from 'next/image'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import course1 from '../public/images/course1.jpg'
import course2 from '../public/images/course2.jpg'
import course3 from '../public/images/course3.jpg'

const useStyles = makeStyles({
    root: {
        padding: '30px 0 0px 0'
    },
    heading: {
        textAlign: 'center',
        color: "#2B0F56",
        fontWeight: '700'
    },
    details: {
        marginTop: '20px'
    },
    grid: {
        padding: '40px'
    }
})

const Courses = () => {
    const classes= useStyles()
    const courses = [
        {
            id: 1,
            img: course1,
            details: 'Case studies that illustrate how Contentstack’s headless CMS helps global corporations create better digital experiences faster, and why your organization should never settle for inferior content experience platforms.'
        },
        {
            id: 2,
            img: course2,
            details: 'Contentstack’s Documentation for developers, content managers, owners, and admins provides information for you to learn more and address your questions.'
        },
        {
            id: 3,
            img: course3,
            details: 'Learn more about the headless CMS technology, news, tips, and best practices, including CXPs, DXPs, content hubs, SaaS CMS, and more!'
        },
    ]
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant="h2" className={classes.heading}>
                    Recommended Resources
                </Typography>
                <Grid container>
                    {
                        courses.map(course => {
                            return <Grid key={course.id} item xs={12} md={4} className={classes.grid}>
                                <Image src={ course.img} className={classes.img} width={400} height={200} alt={course.name } />
                                <Typography variant='subtitle1' className={classes.details}>
                                    {course.details}
                                </Typography>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default Courses;