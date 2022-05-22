import ContactForm from "../components/Forms";
import HeaderImage from "../components/HeaderImages";

import headingImage from '../public/images/rumba405team.jpeg';

import styles from '../styles/Contact.module.css';

export default function Contact () {

    return (
        <>
            <HeaderImage image={headingImage.src} heading='Contact'/>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h2>Contact Us</h2>
                    <p>Would you like more information? Reach out to us and we would be happy to answer any questions.</p>
                </div>
                <div className={styles.border}></div>
                <div className={styles.form}>
                    <ContactForm />
                </div>
            </section>
        </>
    )
}