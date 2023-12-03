import Logo from "./components/logo/logo"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import Background from "./components/background/background";
import { useState } from "react";
import Popup from "./components/popup/popup";
import SuccessPopup from "./components/successPopup/successPopup";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  return (
    <div className="App">
      <Logo />
      <Main setIsOpened={setIsOpened} />
      <Footer />
      <Background />
      <Popup isOpened={isOpened} setIsOpened={setIsOpened} setIsFormSubmitted={setIsFormSubmitted} />
      <SuccessPopup isFormSubmitted={isFormSubmitted} setIsFormSubmitted={setIsFormSubmitted} />
    </div>
  );
}

export default App;
