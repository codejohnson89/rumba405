import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import headerrumbaLogo from '../../public/images/headerrumbaLogo.png';

import { Navbar, NavbarBrand, Container, Nav } from 'react-bootstrap';

export default function Header () {
    return (
        <header>
            <Navbar className={styles.navbar} variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home"><Image src={headerrumbaLogo} width={75} height={75} alt="Rumba 405 logo"></Image></Navbar.Brand>
                    <Nav className={[styles.navContainer, 'me-auto'].join(' ')}>
                        <Nav.Link className={styles.nav} href="#home">Home</Nav.Link>
                        <Nav.Link className={styles.nav} href="#features">Classes</Nav.Link>
                        <Nav.Link className={styles.nav} href="#pricing">Events</Nav.Link>
                        <Nav.Link className={styles.nav} href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>

    )
};