import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>23 de janeiro de 2022</time>
            <strong>Creating a monorepo with Lerna & Yarn workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis, aspernatur praesentium, assumenda possimus voluptatem
              harum, illum voluptates rerum facere placeat suscipit voluptatum a
              unde neque odit excepturi laboriosam repellendus.
            </p>
          </a>
          <a href="">
            <time>23 de janeiro de 2022</time>
            <strong>Creating a monorepo with Lerna & Yarn workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis, aspernatur praesentium, assumenda possimus voluptatem
              harum, illum voluptates rerum facere placeat suscipit voluptatum a
              unde neque odit excepturi laboriosam repellendus.
            </p>
          </a>
          <a href="">
            <time>23 de janeiro de 2022</time>
            <strong>Creating a monorepo with Lerna & Yarn workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis, aspernatur praesentium, assumenda possimus voluptatem
              harum, illum voluptates rerum facere placeat suscipit voluptatum a
              unde neque odit excepturi laboriosam repellendus.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
