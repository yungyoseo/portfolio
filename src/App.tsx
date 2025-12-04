import {Route, Routes} from 'react-router-dom';

import {Home, About, Projects, Awards, Certification} from '@/pages';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
    </>
  );
}

export default App;
