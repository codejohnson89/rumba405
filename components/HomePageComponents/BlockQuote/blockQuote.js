import styles from './styles.module.css';

export default function BlockQuote () {
    return (
        <>
            <section className={styles.container}>
                <h1 className={styles.header}>
                    <figure>
                        <blockquote>
                            <q>There are shortcuts to happiness, and dancing is one of them.</q>
                        </blockquote>
                    </figure>
                    <figcaption>– Vicki Baum</figcaption>
                </h1>
            </section>
        </>
    )
}