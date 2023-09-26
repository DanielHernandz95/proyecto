import Layout from "@/components/layout";
import { getSession } from "next-auth/react";

export default function Cuenta() {
  return <Layout>Cuenta de usuario</Layout>;
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
