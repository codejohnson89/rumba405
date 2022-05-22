import { useForm } from "react-hook-form";

import { Form, FormGroup, FormLabel, Button, Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';

import styles from './styles.module.css';

import keys from '../utils/apiKeys';
import { useRef } from "react";

export default function ContactForm () {
    const { register, setValue, handleSubmit, watch, formState: {error}} = useForm();
    const fname = useRef();
    const lname = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const onSubmit = data => {
        console.log(data);

        emailjs.send('service_jajhgua', keys.templateID, data, keys.user_ID)
            .then((result) => {
                alert("We've received your message and will contact you shortly!")
                setValue("firstName", "");
                setValue("lastName", "");
                setValue("email", "");
                setValue("message", "");
            },
            (error) => {
                alert(`There was an error with the submission of this form. Please try again!`)
            })

    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicFName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control ref={fname} type="text" placeholder="First Name" {...register('firstName')} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-6" controlId="formBasicLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control ref={lname} type="text" placeholder="Last Name" {...register('lastName')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={email} type="email" placeholder="Enter email" {...register('email')}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTextarea">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control ref={message} className={styles.message} type="textarea" placeholder="Your message" {...register('message')}/>
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