import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismiClient } from "../../service/prismic";
import style from "./style.module.scss"
import Prismic from "@prismicio/client"

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

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismiClient();

    const response = await prismic.query([
        Prismic.predicates.at("document.type", "publication")
    ], {
        fetch: ["publication.title", "publication.content"],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}