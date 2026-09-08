import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div>

            <header className={styles.container}>

                <span>Alonso Nuñez</span>
                <nav class="">
                    <a href="https://svetlane.vercel.app">
                        <img src="/img/languages.svg" alt="" />
                    </a>
                </nav>
                <ul>
                    <li>
                        Based in Spain
                    </li>
                    <li>
                    <a href=""> <img src="/img/spain_flag.svg" alt="" /> </a>
                    </li>
                </ul>
                
            </header>
        </div>

    )
}