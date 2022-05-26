import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  duration: 3000,
  easing: "ease",
  once: false,
});

function App() {
  return (
    <div className="bg__container">
      <div className="content" data-aos="fade-up">
        <p>Nice to meet you,</p>
        <h3>We are preparing something exciting & amazing for you.</h3>
        <div className="icons__container">
          <h4>Stay Connected :</h4>
          <div className="icons">
            <a href="https://www.facebook.com/Balchhireosrt"><i className="ri-facebook-fill" ></i></a> 
            <a href="https://www.instagram.com/balchhiresort/"><i className="ri-instagram-line"></i></a>
           <a href=""><i></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
