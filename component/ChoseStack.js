import Typography from '@material-ui/core/Typography';

const ChoseStack = () => {
    const stack = [
        {
            title: 'Creating Content Faster',
            details: 'Intuitively designed so marketers can do more faster, flying solo - developers rejoice.'
        },
        {
            title: 'Managing Content Easier',
            details: 'Get more content in more places with less hassle - on one platform.'
        },
        {
            title: 'Made for the Enterprise',
            details: 'Built in the cloud to scale with exceptional support to accelerate your digital strategy.'
        }
    ]
    return ( 
        <main>
            <Typography variant="h2" align='center'>
                Why Choose Contentstack?
            </Typography>
        </main>
     );
}
 
export default ChoseStack;