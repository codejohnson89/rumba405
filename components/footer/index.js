import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <h3 className={styles.heading}>Follow Us!</h3>
           <div className={styles.socialMediaContainer}>
               <Link href='https://www.facebook.com/Rumba-405-101207482333015'>
                    <a><i className={[styles.bi, 'bi-facebook'].join(' ')}></i></a>
               </Link>
               <Link href='https://wa.me/14054826386'>
                    <a><i className={[styles.bi, 'bi-whatsapp'].join(' ')}></i></a>
               </Link>
               <Link href='https://www.instagram.com/rumba405dancecompany/'>
                    <a><i className={[styles.bi, 'bi-instagram'].join(' ')}></i></a>
               </Link>
               <Link href='https://www.youtube.com/channel/UC3co6W9XxbC0oRluHsSKxFQ'>
                    <a><i className={[styles.bi, 'bi-youtube'].join(' ')}></i></a>
               </Link>
           </div>
      </footer>
    )
}