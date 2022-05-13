import Link from "next/link";
import Image from "next/image";
import { Button } from "react-bootstrap";

import styles from './styles.module.css';

import image from '../../../public/images/okc-instructors-2.jpeg';

export default function Services () {
    return (
        <>
            <section class={styles.container}>
            <div className={[styles.image, styles.content].join(' ')}>
                    <figure class="wp-block-image size-large">
                        <Image width="1024" height="923" src={image} alt="dallas new years eve salsa party" />
                    </figure>
                </div>
                <div className={[styles.text, styles.content].join(' ')}>
                    <h3 className={styles.heading}>Our Services</h3>
                    <p className={styles.text}>We offer group and private lessons. We also provide an opportunity for students to learn and perform choreography taught by the instructors.</p>
                    <p className={styles.text}>We also host local events from social dance parties to latin dance workshops.</p>
                    <div className={styles.buttonContainer}>
                        <Link href="#">
                            <a className={styles.button}>View our classes</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}