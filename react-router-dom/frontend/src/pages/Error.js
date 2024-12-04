import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function Error() {
  const error = useRouteError();
  console.log("Hi", error);
  const data = JSON.parse(error.data);

  return <PageContent title={"Error"}>{data.message}</PageContent>;
}
