import "../styles/styles.css";
import SlideShow from "./modules/SlideShow";
new SlideShow(3000);
if (module.hot) {
  module.hot.accept();
}
