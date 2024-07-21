import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home";
import Layout from "./Components/Layout";
import ShopPage from "./Pages/Shop";
import ContactUsPage from "./Pages/ContactUs";
import FeaturesPage from "./Pages/Features";
import ShopDetailsPage from "./Pages/ShopDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ShopDetailsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
