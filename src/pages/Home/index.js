import React from 'react';
import Header from './components/Header';
import './style.css';

function Home(props) {
   return (
      <div>
         <Header />
         <main className="main">
            <div className='navbar'>Navbar</div>
            <div className='feed'>Feed</div>
         </main>
      </div>
   );
}

export default Home;