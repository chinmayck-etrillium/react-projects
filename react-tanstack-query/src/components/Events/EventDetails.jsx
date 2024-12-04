import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["event"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["event", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
    staleTime: 0,
  });
  console.log(params, data);

  const handleDelete = () => {
    mutate({ id: params.id });
  };

  if (isPending) {
    return (
      <>
        <p style={{ textAlign: "center" }}>
          <LoadingIndicator />
        </p>
        <h2 style={{ textAlign: "center" }}> Deleting...</h2>
      </>
    );
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isLoading && (
        <h1 style={{ textAlign: "center" }}>
          <LoadingIndicator />
        </h1>
      )}
      {!isLoading && data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time
                  dateTime={`Todo-DateT$Todo-Time`}
                >{`${data.date}@${data.time}`}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
