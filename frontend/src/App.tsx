import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout> </Layout>} />
      <Route path="/user-profile" element={<span>user profile</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
