import Image from "next/image";
import { Container, Figure, Row } from "react-bootstrap";
import HeaderImage from "../components/HeaderImages";

import Card from 'react-bootstrap/Card'

import styles from '../styles/Events.module.css';

import events from '../public/images/events.jpg';
import jsqured from '../public/images/j2.jpg';
import and from '../public/images/and.jpg';
import yaya from '../public/images/yaya.jpg';


import Link from "next/link";

export default function Events () {

    return (
        <>
            <main>
                <HeaderImage specialName='events' heading='Events' image={events.src}/>
                <Container>
                    <Row>
                        <div className={[styles.upcoming, styles.events].join(' ')}>
                            <h2>Upcoming Events</h2>
                            <div className={styles.content}>
                                <div className={styles.image}>
                                    <Figure>
                                        <Image src={jsqured} alt='JSquared in Oklahoma City Event'/>
                                    </Figure>
                                </div>
                                <div className={styles.text}>
                                    <h3>JSquared in Oklahoma City</h3>
                                    <p>Jonathan and Jennifer will be Oklahoma City social dancing, teaching, and performing with us 4th of July weekend. JSquared are the current 2019 World Salsa Summit Just Bachata World Champions and international bachata dance instructors and performers from San Antonio!</p>
                                    <Link href="https://www.eventbrite.com/e/jsquared-en-oklahoma-city-bachata-workshops-tickets-334955249167">
                                            <a>Get Your Tickets Here</a>
                                        </Link>  
                                    
                                </div>
                            </div>
                        </div>
                        <div className={[styles.weekly, styles.events].join(' ')}>
                            <h2>Weekly Events</h2>
                            <div className={styles.content}>
                                <div className={['card', styles.card].join(' ')} >
                                    <div className={['card-body', styles.body].join(' ')}>
                                        <h5 className={['card-title', styles.title].join(' ')}>Tu Sabes Tuesday at Hubbly Bubbly</h5>
                                        <Card.Text>
                                        This social is hosted every other Tuesdays evenings from 9pm to 12am. The next few dates for this social will be May 31, June 14, and June 28th. Hubbly Bubbly is located at 2900 N Classen Blvd, Oklahoma City, OK 73106.
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className={['card', styles.card].join(' ')} >
                                    <div className={['card-body', styles.body].join(' ')}>
                                        <h5 className={['card-title', styles.title].join(' ')}>Adelante Dance Studio Social</h5>
                                        <Card.Text>
                                        This social is held every 1st Saturday of each monthly. Whether you are a seasoned dancer or a beginner come out and dance with us. There is a lesson from 8:30-9:30P.M. Only $10 plus military and students with ID get a discount. Great music and great people coming together to have fun while dancing to Salsa, Bachata, Cumbia, Merengue, Kizomba and more! See you on the dance floor! Adelante Dance Studio is located at 201 N Broadway Ave, Moore, OK 73160-5129, United States.
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className={['card', styles.card].join(' ')}  >
                                    <div className={['card-body', styles.body].join(' ')}>
                                        <h5 className={['card-title', styles.title].join(' ')}>Idance Studio Social</h5>
                                        <Card.Text>
                                        This social happens every 2nd and 4th Saturday of each month. Large venue with plenty of space to dance. Each monthly social they provide themes for each social they have throughout the year. Idance Studio is located at 3001 NW 73rd Street, Okc, Ok.
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className={['card', styles.card].join(' ')}  >
                                    <div className={['card-body', styles.body].join(' ')}>
                                        <h5 className={['card-title', styles.title].join(' ')}>Clips N Hips</h5>
                                        <Card.Text>
                                        This social happens every 3rd Saturday of each month. Providing a great atmosphere and room to social dance with your friends. Clips n Hips is located at 4822 N MacArthur, War acres , Ok 73122.
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className={['card', styles.card].join(' ')}  >
                                    <div className={['card-body', styles.body].join(' ')}>
                                        <h5 className={['card-title', styles.title].join(' ')}>Senor Shots provided by Latin Fever Concepts</h5>
                                        <Card.Text>
                                        They are devoted in delivering an energetic nightlife scene fill with the sexiest and diverse people that are passionate about music, dancing, networking & obtaining a new experience. Count on Latin Fever Concepts to always play the latest urban Latin music in the industry. Senor Shots is open every Friday and Saturday and located at 323 E. Sheridian Ave, Oklahoma City, OK.
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className={['card', styles.card].join(' ')} >
                                    <div className={['card-body', styles.body].join(' ')}>
                                        <h5 className={[styles.title, 'card-title'].join(' ')}>3Sixty Dance Studio provided by Latin Fusion OK</h5>
                                        <Card.Text>
                                        3Sixty Dance studio provides a dance social on every 3rd Friday night. Providing great music and an amazing floor to dance the night away. 3Sixty Dance studio is located at 7312 Cherokee Plaza, OKC, Ok.
                                        </Card.Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={[styles.pastEvents, styles.events].join(' ')}>
                            <h2>Past Events</h2>
                            <div className={styles.content}>
                                <Figure>
                                    <Image src={yaya} alt="Yaya in Oklahoma City event" />
                                </Figure>
                                <Figure>
                                    <Image src={and} alt="Alex and Desiree in Oklahoma City event" />
                                </Figure>
                            </div>
                        </div>
                    </Row>
                </Container>
            </main>
        </>
    )
}