import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PasangBaru from './pages/PasangBaru';
import Pengaduan from './pages/Pengaduan';
import 'bootstrap/dist/css/bootstrap.min.css';
import CekRekening from "./pages/CekRekening";
import SecondNavbar from "./components/SecondNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <>
            <Navbar />
            <Dashboard />
            <Footer />
          </>
        )} />
        <Route path="/pasang-baru" element={(
          <>
            <SecondNavbar />
            <PasangBaru />
            <Footer />
          </>
        )} />
        <Route path="/pengaduan" element={(
          <>
            <SecondNavbar />
            <Pengaduan />
            <Footer />
          </>
        )} />
        <Route path="/cek-rekening" element={(
          <>
            <SecondNavbar />
            <CekRekening />
            <Footer />
          </>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
