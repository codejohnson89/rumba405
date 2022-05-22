import Card from 'react-bootstrap/Card';
import Script from "next/script";

import styles from './styles.module.css';


export default function CardComponent (props) {
    return (
        <>
            <Card>
                <Card.Img className={styles.image} variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <div id='smart-button-container' className='test'>
                      <select className='select-options-container' id="item-options">
                        <option value="Pay for 1 class" price="15">Pay for 1 class - 15 USD</option>
                        <option value="Pay for 4 classes" price="50">Pay for 4 classes - 50 USD</option>
                        <option value="Pay for 8 classes" price="90">Pay for 8 classes - 90 USD</option>
                      </select>
                      <select style={{visibility: 'hidden'}} id="quantitySelect"></select>
                      <div id="paypal-button-container"></div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}