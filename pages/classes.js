import { Col, Container, Row } from "react-bootstrap";
import ClassCardComponent from "../components/CardComponent/publicClass";
import Script from "next/script";

import styles from '../styles/Classes.module.css';

import publicClass from '../public/images/publicClass.jpeg';
import publicClass2 from '../public/images/publicClass-2.jpeg';
import logo from "../public/images/cropped-logo-1.jpeg";

import HeaderImage from "../components/HeaderImages";
import TrainingTeam from "../components/CardComponent/trainingTeam";

export default function Classes () {
    return (
        <>
            <Script
                src="https://www.paypal.com/sdk/js?client-id=AYxI42bF7gwRGg3ctes8e3DwBrDAy4Df4SuVlQvSmQmpEqEw8vbou87BqMWCK0ix3T8e6Ee2Kmu_W8N5&enable-funding=venmo&currency=USD" 
                id="loadPaypal"
                strategy='beforeInteractive'
                data-sdk-integration-source="button-factory"
            />
            <Script
                 id="paypalButtonsLoaded"
                 strategy='lazyOnload'
                 dangerouslySetInnerHTML={{
                    __html:`function initPayPalButtonTraining() {
                        var shipping = 0;
                        var itemOptions = document.querySelector("#smart-button-container-train #item-options");
                    var quantity = parseInt();
                    var quantitySelect = document.querySelector("#smart-button-container-train #quantitySelect");
                    if (!isNaN(quantity)) {
                      quantitySelect.style.visibility = "visible";
                    }
                    var orderDescription = 'Rumba 405 Training Team Program Level 1 for absolute beginners.';
                    if(orderDescription === '') {
                      orderDescription = 'Item';
                    }
                    paypal.Buttons({
                      style: {
                        shape: 'rect',
                        color: 'black',
                        layout: 'horizontal',
                        label: 'paypal',
                        
                      },
                      createOrder: function(data, actions) {
                        var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
                        var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
                        var tax = (0 === 0 || false) ? 0 : (selectedItemPrice * (parseFloat(0)/100));
                        if(quantitySelect.options.length > 0) {
                          quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
                        } else {
                          quantity = 1;
                        }
                
                        tax *= quantity;
                        tax = Math.round(tax * 100) / 100;
                        var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
                        priceTotal = Math.round(priceTotal * 100) / 100;
                        var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;
                
                        return actions.order.create({
                          purchase_units: [{
                            description: orderDescription,
                            amount: {
                              currency_code: 'USD',
                              value: priceTotal,
                              breakdown: {
                                item_total: {
                                  currency_code: 'USD',
                                  value: itemTotalValue,
                                },
                                shipping: {
                                  currency_code: 'USD',
                                  value: shipping,
                                },
                                tax_total: {
                                  currency_code: 'USD',
                                  value: tax,
                                }
                              }
                            },
                            items: [{
                              name: selectedItemDescription,
                              unit_amount: {
                                currency_code: 'USD',
                                value: selectedItemPrice,
                              },
                              quantity: quantity
                            }]
                          }]
                        });
                      },
                      onApprove: function(data, actions) {
                        return actions.order.capture().then(function(orderData) {
                          
                          // Full available details
                          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                
                          // Show a success message within this page, e.g.
                          const element = document.getElementById('paypal-button-container');
                          element.innerHTML = '';
                          element.innerHTML = '<h3>Thank you for your payment!</h3>';
                
                          // Or go to another URL:  actions.redirect('thank_you.html');
                
                        });
                      },
                      onError: function(err) {
                        console.log(err);
                      },
                    }).render('#paypal-button-container-train');
                  }

                  function initPayPalButton() {
                    var shipping = 0;
                    var itemOptions = document.querySelector("#smart-button-container #item-options");
                var quantity = parseInt();
                var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
                if (!isNaN(quantity)) {
                  quantitySelect.style.visibility = "visible";
                }
                var orderDescription = 'Salsa partner work class designed to teach students different salsa turn patterns while using the correct technique to execute.';
                if(orderDescription === '') {
                  orderDescription = 'Item';
                }
                paypal.Buttons({
                  style: {
                    shape: 'rect',
                    color: 'black',
                    layout: 'horizontal',
                    label: 'paypal',
                    
                  },
                  createOrder: function(data, actions) {
                    var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
                    var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
                    var tax = (0 === 0 || false) ? 0 : (selectedItemPrice * (parseFloat(0)/100));
                    if(quantitySelect.options.length > 0) {
                      quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
                    } else {
                      quantity = 1;
                    }
            
                    tax *= quantity;
                    tax = Math.round(tax * 100) / 100;
                    var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
                    priceTotal = Math.round(priceTotal * 100) / 100;
                    var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;
            
                    return actions.order.create({
                      purchase_units: [{
                        description: orderDescription,
                        amount: {
                          currency_code: 'USD',
                          value: priceTotal,
                          breakdown: {
                            item_total: {
                              currency_code: 'USD',
                              value: itemTotalValue,
                            },
                            shipping: {
                              currency_code: 'USD',
                              value: shipping,
                            },
                            tax_total: {
                              currency_code: 'USD',
                              value: tax,
                            }
                          }
                        },
                        items: [{
                          name: selectedItemDescription,
                          unit_amount: {
                            currency_code: 'USD',
                            value: selectedItemPrice,
                          },
                          quantity: quantity
                        }]
                      }]
                    });
                  },
                  onApprove: function(data, actions) {
                    return actions.order.capture().then(function(orderData) {
                      
                      // Full available details
                      console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            
                      // Show a success message within this page, e.g.
                      const element = document.getElementById('paypal-button-container');
                      element.innerHTML = '';
                      element.innerHTML = '<h3>Thank you for your payment!</h3>';
            
                      // Or go to another URL:  actions.redirect('thank_you.html');
            
                    });
                  },
                  onError: function(err) {
                    console.log(err);
                  },
                }).render('#paypal-button-container');
              }
              initPayPalButton();
                  initPayPalButtonTraining();`
                 }}
            />
            <HeaderImage image={publicClass2.src} heading='Classes'/>
            <Container>
                <Row className={styles.customRow}>
                    <Col sm={4}>
                        <ClassCardComponent 
                            title="Salsa Partner Work Class" 
                            text="Salsa partner work class designed to teach students different salsa turn patterns while using the correct technique to execute."
                            image ={publicClass.src}
                            />
                    </Col>
                    <Col sm={4}>
                        <TrainingTeam 
                            title="Training Team Program Level 1"
                            text="Rumba 405 Training Team Program Level 1 for absolute beginners. (Starts July 5th)"
                            image={logo.src}
                        />
                    </Col>
                </Row>
            </Container>

        </>
    )
}