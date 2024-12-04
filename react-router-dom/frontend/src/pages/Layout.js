import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Layout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";
  return (
    <>
      <MainNavigation />
      <main>
        {/* {isLoading && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
