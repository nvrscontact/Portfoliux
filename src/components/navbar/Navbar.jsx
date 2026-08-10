import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div>

            <header class="navbar-sec">
                <a href=""></a>
                <nav class="">
                    <a href="https://singerstore.vercel.app/">
                        <img src="/img/song.svg" alt="" />
                    </a>
                    <a href="https://svetlane.vercel.app">
                        <img src="/img/languages.svg" alt="" />
                    </a>
                    <a href="https://candiesweb.vercel.app">
                        <img src="/img/cupcake.svg" alt="" />
                    </a>
                </nav>
                <ul>
                    <a href=""> <img src="/img/usa_flag.svg" alt="" /> </a>
                </ul>
            </header>
            <section className="promotions_header__shadow"></section>
        </div>

    )
}