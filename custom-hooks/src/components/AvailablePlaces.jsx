import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";

import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const { availablePlaces, error, isFetching } = useFetch(fetchAvailablePlaces);
  console.log(availablePlaces)

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
