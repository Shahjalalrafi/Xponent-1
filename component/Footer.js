import { Container, makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FooterCol from "./FooterCol"

const Footer = () => {
    // const Products = [ 'Features', 'For It And Developers',"For business", "Integration", "paricing", 'roi calculator', "customer Succes" ]
    // const users = ["supported platforms", 'Faqs', "Trust", "System Status"]
    // const education = [ "customer Resources", "Cms Guides", "Blog", "Docs"]
    // const company = ["about", "news", "Press", "carrers", "Became a parter", "Contact us"]

    const noNamed = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return ( 
        <footer>
            <Container>
            <div className="container pt-5">
                <Grid container>
                    <Grid item><FooterCol key={1} menuTitle={"."} menuItems={noNamed}/></Grid>
                    <Grid><FooterCol key={2} menuTitle="Services" menuItems={services}/></Grid>
                    <Grid><FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/></Grid>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"></a></li>
                            <li className="list-inline-item"><a href="//google.com"></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </Grid>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
            </Container>
        </footer>
     );
}
 
export default Footer;