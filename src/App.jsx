import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Header from './components/NavbarComp';
import Upload from './pages/Upload';
import Loading from './pages/Loading';
import Result from './pages/Result';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <Header />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;