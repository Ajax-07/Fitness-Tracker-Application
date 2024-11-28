import { ThemeProvider, styled } from "styled-components";
import { DarkTheme } from "../../utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "../../pages/Authentication/Authentication";
// import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Service from "../../pages/Workout/Workout.jsx";
import Workout from "../../pages/Workout/Workout";

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
  // const [user, setuser] = useState(false);

  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        {true ? (
          <Container>
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workout" exact element={<Workout />} />
              <Route path="/service" exact element={<Service />} />
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
