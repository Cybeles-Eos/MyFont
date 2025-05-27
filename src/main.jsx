import { createRoot } from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom'

//Page
import Home from "./page/Home/home.jsx"
import About from './page/about/about.jsx'
import Contact from './page/contact/contact.jsx'
import NoPage from './page/404/nopage.jsx'
import Fontpage from './page/fontPage/fontpage.jsx'


//Components
import Nav from './components/header/nav.jsx'
import ScrollToTop from './scrollTop.jsx'
//Styles
import './index.css'

function Main() {

  return (
    //  basename='/YourFont'
    <HashRouter>
      <ScrollToTop />
      <Routes>
        
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/fontpage' element={<Fontpage />}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

createRoot(document.getElementById('root')).render(<Main />);




