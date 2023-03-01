import { useRef, useState } from 'react';
import styles from './SlideShow.module.css'

function SlideShow({ images }) {

    const carousel = useRef();
    const [count, setCount] = useState(0);

    // timer section
    

    //

    function Incremet(delta) {
        if (!carousel.current) {return};

        const width = carousel.current.offsetWidth;        

        if (count + delta > images.length -1) {
            setCount(0);
            carousel.current.scrollTo(0, 0); //scroll all way to zero
            return;
        }
        
        else if (count + delta < 0) {
            setCount(images.length - 1);
            carousel.current.scrollTo(
                carousel.current.scrollLeft + width * images.length - 1,
                0
            );
            return;    
        }

        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta, 0
        );
        setCount(c => c + delta);
    }

    return(
        <div className={styles.container}>

            <div className={styles.btn_l}
                onClick={() => Incremet(-1)}
            />
            <div className={styles.btn_r}
                onClick={() => Incremet(1)}
            />
                
            <div className={styles.carousel} ref={carousel}>
                {images.map((img, idx) => (
                    <div
                        className={styles.item}
                        key={`${idx}-${img.title}`}
                    >
                        <img src={img.src} alt={img.title} />
                        <p>{img.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow