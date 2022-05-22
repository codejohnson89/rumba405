import Card from 'react-bootstrap/Card';
import Script from "next/script";

import styles from './styles.module.css';

export default function TrainingTeam (props) {
    return (
        <>
            <Card>
                <Card.Img className={styles.image} variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <div id='smart-button-container-train' className={styles.container}>
                      <div className={styles.container}>
                        <select className='select-options-container' id="item-options">
                            <option value="Training Program Only" price="100">Training Program Only - 100 USD</option>
                            <option value="Training Program w/ Partner Work classes" price="125">Training Program Pro package - 125 USD</option>
                        </select>
                        <select style={{visibility: "hidden"}} id="quantitySelect"></select>
                        </div>
                        <div id="paypal-button-container-train"></div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}