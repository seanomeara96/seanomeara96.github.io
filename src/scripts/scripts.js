import "../styles/styles.css";
import { sites } from "./modules/list";
const siteList = document.querySelector(".sites__inner");
sites.forEach((item) => {
  console.log(item);
  siteList.insertAdjacentHTML(
    "beforeend",
    `<div>
      <a href="./sites/${item}/index.html">${item}</a>
    </div>`
  );
});
