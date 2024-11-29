import { ThemeProvider, styled } from "styled-components";
import { DarkTheme } from "../../utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Authentication from "../../pages/Authentication/Authentication";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Workout from "../../pages/Workout/Workout";
import Service from "../../pages/Service/Service";
import Goals from "../../pages/Goals/Goals";
import About from "../../pages/About/About";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [user, setuser] = useState(false);

  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        {!user ? (
          <Container>
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workout" exact element={<Workout />} />
              <Route path="/service" exact element={<Service />} />
              <Route path="/goals" exact element={<Goals/>} />
              <Route path="/about" exact element={<About/>} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
