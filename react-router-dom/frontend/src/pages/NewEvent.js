import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEvent() {
  return <EventForm />;
}

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    url = "http://localhost:8080/events/" + params.id;
  }
  const event = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  try {
    await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    return redirect("/events");
  } catch (error) {
    console.log(error);
    throw new Response(JSON.stringify({ message: "Error occoured!" }), {
      status: 500,
    });
  }
}
