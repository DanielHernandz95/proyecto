import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  try {
    await connectMongo();

    if (req.method === "POST") {
      if (!req.body) {
        return res.status(400).json({ error: "El formulario no tiene datos" });
      }

      const { username, email, password } = req.body;

      // Validar usuarios repetidos
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return res.status(422).json({ message: "El usuario ya existe" });
      }

      // Hash de la contraseña
      const hashedPassword = await hash(password, 12);

      const newUser = new Users({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({ status: true, user: newUser });
    } else {
      res
        .status(405)
        .json({ message: "Método HTTP no válido, solo se acepta POST" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
}
