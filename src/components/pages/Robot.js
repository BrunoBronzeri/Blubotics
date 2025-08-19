import styles from './Projects.module.css'

function Robot({ projects }) {
    return (

        <div className={styles.display}>

            {projects.map((card, idx) => (
                <div className={styles.card} key={`${idx}-${card.title}`}>
                    <img src={card.src} alt={card.name} />
                    <div>
                        <h2>{card.name}</h2>
                        <h3>Categoria: {card.role}</h3>
                    </div>
                </div>
            ))}

            <div>
                {/* <h1>Robô Seguidor de Linha</h1>
                <p>Primeiro desenvolvimento da equipe. O seguidor de linha conta
                    com um Arduino Mega e um Shield de circuito impresso desenvolvido
                    pela própria equipe.
                </p> */}
                <h1></h1>
                <p></p>
            </div>
        </div>
    )
}

export default Robot