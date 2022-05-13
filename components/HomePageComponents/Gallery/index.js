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
                            <Image src={one} alt="Oklahoma city rumba 405 team"></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={two} alt="Oklahoma city rumba 405 team"></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={three} alt="Oklahoma city rumba 405 team"></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={four} alt="Oklahoma city rumba 405 team"></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={five} alt="Oklahoma city rumba 405 team"></Image>
                        </figure>
                    </div>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image src={six} alt="Oklahoma city rumba 405 team"></Image>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}