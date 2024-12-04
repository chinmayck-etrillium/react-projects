import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();
  const mode = new URL(request.url).searchParams.get("mode") || "signup";

  console.log(Object.fromEntries(data));
  const user = {
    email: data.get("email"),
    password: data.get("password"),
  };

  if (mode !== "login" && mode !== "signup") {
    console.log("invalid");
    throw new Response(JSON.stringify({ message: "Invalid user input" }), {
      status: 422,
    });
  }

  let response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  let datas = await response.json();
  let errorData = "Could not authenticate user";

  if (datas.errors !== undefined) {
    return datas.errors;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: errorData }), {
      status: 401,
    });
  }

  localStorage.setItem("token", datas.token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
}
