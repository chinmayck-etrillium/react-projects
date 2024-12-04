import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const event = useRouteLoaderData("event-detail");
  console.log("EventDetailPage", event);
  return <EventItem event={event.event} />;
}

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
