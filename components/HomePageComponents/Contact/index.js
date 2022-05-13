import Link from "next/link";

import styles from './styles.module.css';

export default function Contact () {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.overlay}>
                    <p className={[styles.text, styles.strongText].join(' ')}>
                        <strong>Unleash your creativity with the power of Dance</strong>
                    </p>
                    <p className={styles.text}>
                    Start your dance journey with us!
                    </p>
                    <Link href="/contact">
                        <a className={styles.button}>Contact Us</a>
                    </Link>
                </div>
            </section>
        </>
    )
}