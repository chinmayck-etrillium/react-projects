import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";

  console.log(error);
  let response = error.data
    ? JSON.parse(error.data)
    : { message: "Unexpected error" };

  console.log(response, error);
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{response.message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
