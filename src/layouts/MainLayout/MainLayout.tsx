import { Footer, Navbar } from "@components/Layout";
import { Container } from "@components/ui";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default MainLayout;
