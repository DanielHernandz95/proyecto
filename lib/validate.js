export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Campo Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Dirección de correo inválida";
  }

  //validate for password
  if (!values.password) {
    errors.password = "Campo Obligatorio";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "La contraseña debe tener entre 8 y 20 caracteres de longitud";
  } else if (values.password.includes(" ")) {
    errors.password = "La contraseña no puede contener espacios";
  }

  return errors;
}

export function registrerValidate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Campo Obligatorio";
  } else if (values.username.includes(" ")) {
    errors.username = "El nombre de usuarios no puede tener espacios";
  }

  if (!values.email) {
    errors.email = "Campo Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Dirección de correo inválida";
  }

  //validate for password
  if (!values.password) {
    errors.password = "Campo Obligatorio";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "La contraseña debe tener entre 8 y 20 caracteres de longitud";
  } else if (values.password.includes(" ")) {
    errors.password = "La contraseña no puede contener espacios";
  }

  if (!values.cpassword) {
    errors.cpassword = "campo Obligatorio";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Las contraseñas no coinciden";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "La contraseña no puede tener espacios";
  }

  return errors;
}
