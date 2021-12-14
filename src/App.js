// eslint-disable-next-line
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import './bootstrap.min.css'
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
  <>
    <Header/>
    <main>
      <Container>
        <HomeScreen/>
      </Container>
      </main>
    <Footer/>
  </>
  )
}

export default App;
