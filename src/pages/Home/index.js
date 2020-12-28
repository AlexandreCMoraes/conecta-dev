import React from 'react';
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
   root: {
      display: 'flex',
      flexDirection: 'column'
   },
   main: {
      height: '100vh',
      padding: 24,
      // display: 'flex',
      // width: '1280px',
      // margin: '0 auto',
   },
   toolbar: {
      minHeight: 64,
   }
})

function Home(props) {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Header />
         <div className={classes.toolbar}></div>
         <main className={classes.main}>
            <Container maxWidth="lg">
               <Box display="flex">
                  {/* Box equivalente a um div (por default) */}
                  <NavBar />
                  <Feed />
               </Box>
            </Container>


            {/* o de cima equivalente ao de baixo */}
            {/* <Container>
               <div>
                  <NavBar />
                  <Feed />
               </div>
            </Container> */}
         </main>
      </div>
   );
}

export default Home;