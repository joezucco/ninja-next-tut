import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Esse cupidatat nostrud qui sint irure incididunt voluptate Lorem
        proident quis nisi officia.
      </p>
      <p className={styles.text}>
        Do aliquip consequat Lorem in adipisicing enim elit. Eiusmod cillum
        adipisicing amet culpa ex sunt tempor dolore excepteur.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
