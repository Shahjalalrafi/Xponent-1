import styles from '../styles/Header.module.css'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <div className={styles.header}>
            <Container maxWidth="lg">
                <div className={styles.headerText}>
                    
                </div>
            </Container>
        </div>
    );
}

export default Header;