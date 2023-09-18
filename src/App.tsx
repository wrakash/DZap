import { Routes, Route, Outlet } from "react-router-dom";
import { Disperse, Error } from "./pages";
import { Header, Footer } from "./components";

function BasicLayout() {
  return (
    <div className="min-w-screen min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh-80px)] px-[1rem] md:px-[5rem] lg:px-[6rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Disperse />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
