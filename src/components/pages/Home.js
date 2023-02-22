import styles from './Home.module.css'
import not from '../../images/notfound.png'

function Home() {
    return (
        <div className={styles.main}>
            <img src={not} alt='404'/>
        </div>
    );
}

export default Home