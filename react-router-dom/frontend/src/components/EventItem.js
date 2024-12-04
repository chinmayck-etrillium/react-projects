import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const navigate = useNavigate();
  const params = useParams();
  async function startDeleteHandler() {
    try {
      await fetch(`http://localhost:8080/events/${params.id}`, {
        method: "DELETE",
      });
      navigate("/events");
    } catch (err) {
      console.error("Error happened: ", err);
      throw new Response(JSON.stringify({ message: "Error Happened!" }), {
        status: 500,
      });
    }
  }
  console.log("Hi", event);

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
