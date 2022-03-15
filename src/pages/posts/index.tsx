import styles from './styles.module.scss';
import Head from 'next/head';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>
                            Netlify e a criação da JAMstack
                        </strong>
                        <p>
                            A arquitetura JAMstack mescla diversos atributos de tecnologias da programação — JAM vem de JavaScript, API e Markup. Uma aproximação moderna de desenvolvimento da web baseada em JavaScript do lado do cliente, APIs reutilizáveis e marcação pré-construída.
                        </p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>
                            Netlify e a criação da JAMstack
                        </strong>
                        <p>
                            A arquitetura JAMstack mescla diversos atributos de tecnologias da programação — JAM vem de JavaScript, API e Markup. Uma aproximação moderna de desenvolvimento da web baseada em JavaScript do lado do cliente, APIs reutilizáveis e marcação pré-construída.
                        </p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>
                            Netlify e a criação da JAMstack
                        </strong>
                        <p>
                            A arquitetura JAMstack mescla diversos atributos de tecnologias da programação — JAM vem de JavaScript, API e Markup. Uma aproximação moderna de desenvolvimento da web baseada em JavaScript do lado do cliente, APIs reutilizáveis e marcação pré-construída.
                        </p>
                    </a>
                </div>
            </main>
        </>

    )

}