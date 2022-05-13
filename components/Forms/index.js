import { useForm } from "react-hook-form";

import { Form, FormGroup, FormLabel, Button, Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';

import styles from './styles.module.css';

import keys from '../utils/apiKeys';

export default function ContactForm () {
    const { register, handleSubmit, watch, formState: {error}} = useForm();
    const onSubmit = data => {
        console.log(data);

        emailjs.send('service_jajhgua', keys.templateID, data, keys.user_ID)
            .then((result) => {
                alert('We got the message')
            },
            (error) => {
                alert('Did not work')
            })

    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicFName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" {...register('firstName')}/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-6" controlId="formBasicLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" {...register('lastName')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...register('email')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTextarea">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control className={styles.message} type="textarea" placeholder="Your message" {...register('message')}/>
                            </Form.Group>
                        <Button className={styles.button} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Container>
            </Form>
        </>
    )
}