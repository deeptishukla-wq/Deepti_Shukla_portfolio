import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CaseStudy from "./pages/CaseStudy";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
