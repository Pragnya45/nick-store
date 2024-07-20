import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../ThemeProvider";
import Footer from "./Footer";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex h-full grow">
        <div
          className={`bg-color-${theme} min-h-screen overflow-y-auto w-full py-6 pb-24`}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
}
