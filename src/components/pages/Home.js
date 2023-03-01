import styles from './Home.module.css'

import SlideShow from "./SlideShow";
import data from './DataImages'

function Home() {
    return (
        <div className={styles.slide}>
            <SlideShow images={data} />
        </div>
        
    );
}

export default Home
