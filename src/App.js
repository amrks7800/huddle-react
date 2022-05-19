import { Container } from "./components/styles/Container-s";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import { useState } from "react";
import content from "./Content";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState({
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        {content.map((item, index) => {
          return <Card item={item} key={index} layout="row" />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
