import React  from 'react'

import {Navbar, Sidebar} from './components';

//css
import './variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global-styles.css';
import 'normalize.css';


const App = () => {
  return (
    <>
    <Sidebar />
    <Navbar />
    </>
  )
}

export default App