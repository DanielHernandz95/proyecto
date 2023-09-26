import Layout from "@/components/layout";
import React, { Component } from "react";
import Webcam from "react-webcam";
import { useSession, getSession } from "next-auth/react";

//const { data: session } = useSession();
export default class Consola extends Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  state = {
    imagen: null,
  };

  foto = () => {
    var captura = this.webcam.getScreenshot();
    console.log(captura);
    this.setState({
      imagen: captura,
    });
  };
  render() {
    return (
      <Layout>
        Control del brazo robotico_23
        <div className="px-40">
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />
        </div>
      </Layout>
    );
  }
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
