import styles from './styles.module.css';
import { useMediaQuery } from 'react-haiku';
import Image from 'next/image';

export default function HeaderImage (props) {
    const breakpoint = useMediaQuery('(max-width: 526px)', false);

    return (
        <>
        {breakpoint ? 
            <section className={[props.specialName, styles.mobileBanner].join(' ')}>
                <div className={styles.overlay}>
                    <figure className={styles.image}>
                        <Image src={props.image} width="425" height="300"/>
                        <figcaption className={styles.mobileText}>{props.mobileText}</figcaption>
                    </figure>
                </div>
            </section>
            : 
            <section className={[styles.headerImage, props.specialName].join(' ')} style={{backgroundImage: `url(${props.image})`}}>
                <div className={styles.overlay}>
                    <h1 className={styles.heading}>{props.heading}</h1>
                </div>                
            </section>
            }
  
        </>
    )
}