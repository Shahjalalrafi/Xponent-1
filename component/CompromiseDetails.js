import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        padding: '50px 0'
    },
    gridItem: {
        border: '5px solid white',
        color: 'white',
        padding: '30px'
    },
    title: {
        color: "#EB5646",
        fontWeight: 'bold'
    }
})

const CompromiseDetails = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.root} container>
            <Grid item xs={12} md={6} className={classes.gridItem}>
                <Typography >
                    <Typography variant='h2' className={classes.title}>
                        Berlitz
                    </Typography>
                    <Typography variant="h6">
                        Retail
                    </Typography>
                    <Typography variant="h6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, quae quos. Eligendi, sint blanditiis reprehenderit iste placeat pariatur quae vero adipisci assumenda dicta. Officiis, harum dolorum quasi perspiciatis aliquid numquam!
                    </Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.gridItem}>
                <Typography variant='h2' className={classes.title}>
                    Elastic
                </Typography>
                <Typography variant="h6">
                    Search
                </Typography>
                <Typography variant="h6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, quae quos. Eligendi, sint blanditiis reprehenderit iste placeat pariatur quae vero adipisci assumenda dicta. Officiis, harum dolorum quasi perspiciatis aliquid numquam!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default CompromiseDetails;