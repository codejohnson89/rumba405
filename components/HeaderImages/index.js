import styles from './styles.module.css';

export default function HeaderImage (props) {
    return (
        <>
            <section className={styles.headerImage} style={{backgroundImage: `url(${props.image})`}}>
                <div className={styles.overlay}>
                    <h1 className={styles.heading}>{props.heading}</h1>
                </div>                
            </section>
        </>
    )
}