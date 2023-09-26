import Layout from "@/components/layout";
import Login from "@/pages/login";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session }) : Guest()}
    </div>
  );
}

//Guest
function Guest() {
  return (
    <main>
      <Login />
    </main>
  );
}

//Autorized
function User({ session }) {
  return (
    <main>
      <Layout />
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
