import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNewEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EditEvent() {
  const params = useParams();
  const navigate = useNavigate();
  let content;

  const { data } = useQuery({
    queryKey: ["event", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
    staleTime: 0,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["event"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });
  console.log("Edit Data", data);

  function handleSubmit(formData) {
    mutate({ eventData: formData, method: "PUT", id: data.id });
  }

  function handleClose() {
    navigate("../");
  }

  if (isPending) {
    content = (
      <>
        <h1 style={{ textAlign: "center" }}>Updating</h1>
        <p style={{ textAlign: "center" }}>
          <LoadingIndicator />
        </p>
      </>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content && content}
      {!content && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      )}
    </Modal>
  );
}
