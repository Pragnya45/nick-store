import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../ThemeProvider";
import Footer from "./Footer";
import { useState } from "react";
import Mblsidebar from "./Mblsidebar";

export default function Layout() {
  const { theme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main className="flex flex-col">
      <Header setShowSidebar={setShowSidebar} />
      <div className="flex h-full grow">
        {showSidebar && <Mblsidebar setShowSidebar={setShowSidebar} />}

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
