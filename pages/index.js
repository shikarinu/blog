import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import ConvertDate from "./components/convertdate.js";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <ConvertDate convertDate={blog.publishedAt}/>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
            </Link>
        </li>
      ))}
    </div>
  );
}