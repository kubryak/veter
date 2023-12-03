import Logo from "./components/logo/logo"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import Background from "./components/background/background";
import { useState } from "react";
import Popup from "./components/popup/popup";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="App">
      <Logo />
      <Main setIsOpened={setIsOpened} />
      <Footer />
      <Background />
      <Popup isOpened={isOpened} setIsOpened={setIsOpened} />
    </div>
  );
}

export default App;
