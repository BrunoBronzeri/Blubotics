import styles from './Donation.module.css'

function Donation() {
    return (
        <div className={styles.doc}>
            <h1>Doações</h1>
            <h2>Ajude a equipe a alcançar novos horizontes</h2>
            <p>
               Contribuindo com qualquer valor, você se torna parte
               da nossa história, ajudando no desenvolvimento de projetos
                e tornando possível a equipe participar de....
            </p>
        </div>
    );
}

export default Donation