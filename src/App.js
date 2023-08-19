import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { Route, Routes } from 'react-router-dom';
import HTMLheading from './Pages/Use-html-heading';
import HTMLtable from './Pages/Use-html-table';
import HTMLfavicon from './Pages/Use-html-favicon';
import HTMLlist from './Pages/Use-html-ordered-list';
import ReactInnerRouter from './Pages/ReactInnerRouter';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/use-html-heading" element={<HTMLheading />} />
          <Route exact path="/use-html-table" element={<HTMLtable />} />
          <Route exact path="/use-html-favicon" element={<HTMLfavicon />} />
          <Route exact path="/use-html-ordered-list" element={<HTMLlist />} />
          <Route exact path="/use-html-unordered-list" element={<HTMLheading />} />
          <Route exact path="/use-html-form" element={<HTMLheading />} />
          <Route exact path="/use-html-comments" element={<HTMLheading />} />
          <Route exact path="/use-anchor-tag" element={<HTMLheading />} />
          <Route exact path="/use-html-css" element={<HTMLheading />} />
          <Route exact path="/use-html-class" element={<HTMLheading />} />
        </Routes>
        <ReactInnerRouter />
        <Footer />
    </div>
  );
}

export default App;
