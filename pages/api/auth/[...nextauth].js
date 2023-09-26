import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          "Conexión Fallida";
        });
        //verificar usuario
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("Usuario no encontrado, por favor registrese");
        }

        //comparar
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        //contraseña incorrecta
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("El nombre de usuario o la contraseña no coinciden");
        }
        return result;
      },
    }),
  ],
  secret: "4ar9FRjoqEtH/HrO1peB4bqYw8Ur4GM3IELll47mB2Y=",
  //adapter: MongoDBAdapter(clientPromise),
});
