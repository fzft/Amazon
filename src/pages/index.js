import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products}) {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* {Header} */}
      <h1></h1>
      <Header></Header>
      <main className="max-w-screen-2xl mx-auto ">
        {/* {Banner} */}
        <Banner></Banner>

        {/* {ProductFeed} */}
        <ProductFeed products={products}></ProductFeed>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
  return {
      props: {
      products,
      },
  };
}
