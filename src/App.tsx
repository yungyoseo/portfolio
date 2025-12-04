import {Route, Routes} from 'react-router-dom';

import {Home, About, Projects, Awards, Certification} from '@/pages';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/awards" element={<Awards />} />
        <Route path="/portfolio/certification" element={<Certification />} />
      </Routes>
    </>
  );
}

export default App;
