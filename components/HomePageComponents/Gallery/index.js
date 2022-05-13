import Image from "next/image";

import styles from './styles.module.css';

import one from '../../../public/images/gallery/rumba405-1.jpeg';
import two from '../../../public/images/gallery/rumba405-2.jpeg';
import three from '../../../public/images/gallery/rumba405-3.jpeg';
import four from '../../../public/images/gallery/rumba405-4.jpeg';
import five from '../../../public/images/gallery/rumba405-5.jpeg';
import six from '../../../public/images/gallery/rumba405-6.jpeg';

export default function Gallery () {
    return (
        <>
            <section className={styles.container}>
                <h3 className={styles.heading}>Gallery</h3>
                <div className={styles.gallery}>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={one}></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={two}></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={three}></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={four}></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={five}></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={six}></Image>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}