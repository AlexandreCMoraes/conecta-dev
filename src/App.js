import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import theme from "./theme";

import './mock';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* elemento padrao <Home />  */}
          <Route path="/sign-in" element={<SignIn />} />
          {/* elemento para SPA single page apllication <SignIn /> */}
          <Route path="/*" element={<h1>Not Found 404!</h1>} />
          {/* para paginas nao encontradas */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
