import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
