import Head from "next/head";
import style from "./style.module.scss"

export default function Posts() {

    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={style.container}>
                <div className={style.post}>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
                    </a>


                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
                    </a>


                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
                    </a>
                </div>
            </main>
        </>
    );
}