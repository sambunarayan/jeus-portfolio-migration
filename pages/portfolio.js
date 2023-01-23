import Head from 'next/head';

import styles from '../styles/custom.css';
import styles from '../styles/ress.css';
import styles from '../styles/style.css';

export default function portfolio() {
    return (
        <div class="wrapper">
            <header class="header">
            <div class="container">
                <h1 class="header-logo">
                    <a href="#" id="to_home" name="to_home">Jaewoo Kim</a>
                </h1>
                <nav class="gnav">
                    <ul class="gnav-list">
                        <li class="gnav-item"><a href="#about">ABOUT</a></li>
                        <li class="gnav-item"><a href="#skill">SKILL</a></li>
                        <li class="gnav-item"><a href="#project">PROJECT</a></li>
                        <li class="gnav-item"><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </div>
    );
}