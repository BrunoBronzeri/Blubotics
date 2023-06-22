import Mates from "./Mates";
import MatesMobile from "./MatesMobile";

import styles from './Mates.module.css'

function Team() {
    return (
        <div className={styles.doc}>
            <h1>História da Equipe</h1>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Sed sit amet ante leo. In quam diam, 
                faucibus quis laoreet ac, 
                rhoncus non justo. Mauris vulputate ac ex 
                vitae ultricies. Phasellus odio nunc, 
                feugiat ac leo a, gravida venenatis tortor. 
                Aliquam tempor pulvinar diam. Phasellus nec
                tellus gravida, feugiat justo ut, 
                consequat tortor. Sed ut lacus egestas, 
                mattis sem a, hendrerit tellus. 
                Nulla facilisi. 
                Proin sagittis nibh eget 
                diam iaculis hendrerit.
            </p>
            <h1>Membros</h1>
            <div>
                <Mates />
                <MatesMobile />
            </div>
            <h1>Quer fazer parte da equipe?</h1>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Sed sit amet ante leo. In quam diam, 
                faucibus quis laoreet ac, 
                rhoncus non justo. Mauris vulputate ac ex 
                vitae ultricies. Phasellus odio nunc, 
                feugiat ac leo a, gravida venenatis tortor. 
                Aliquam tempor pulvinar diam.
            </p>
            <div className={styles.btn}>
                <button>
                    <a
                        href='https://instagram.com/blubotics?igshid=ZDg1NjBiNjg='
                    >
                        Saiba mais
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Team
