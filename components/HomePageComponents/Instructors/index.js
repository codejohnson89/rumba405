import Image from 'next/image';
import styles from './styles.module.css';

import image from '../../../public/images/okc-instructors.jpeg';

export default function Instructors () {
    return (
        <>
            <section className={styles.container}>
                <div className={[styles.text, styles.content].join(' ')}>
                    <h3 className={styles.heading}>Meet the Instructors</h3>
                    <p className={styles.text}>Meet your instructors Micah and Ariana. Both have been dancing together for over 5 years and both have a combine level over 20 years experience. Having a background in latin dance ranging from known popular genres like mambo and cha cha cha to the deep roots of salsa with Afro-Cuban styles.</p>
                </div>
                <div className={[styles.image, styles.content].join(' ')}>
                    <figure className="wp-block-image size-large">
                        <Image width="1024" height="923" src={image} alt="dallas new years eve salsa party" />
                    </figure>
                </div>
            </section>
        </>
    )
}