import Navigo from "navigo";
import AboutPage from "./pages/about";
import DetailPage from "./components/details";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";
import AdminNewList from "./components/admin/new-list";
import AdminDashboard from "./pages/admin/dashboard";
import Navbar from "./components/admin/navbar";
import SignInPage from "./components/signin";
import SignUpPage from "./components/sinup";
import NewAdd from "./components/admin/new-add";
import NewEdit from "./components/admin/new-edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#app").innerHTML = content;
  document.querySelector("#footer").innerHTML = Footer.render();
};
const printAdmin = (content) => {
  document.getElementById("container").classList.remove("max-w-5xl");
  document.querySelector("#header").innerHTML = Navbar.render();
  document.querySelector("#app").innerHTML = content;
  document.querySelector("#footer").innerHTML = Footer.render();
};
router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/signin": () => {
    print(SignInPage.render());
  },
  "/signup": () => {
    print(SignUpPage.render());
  },
  "/about": () => {
    print(AboutPage.render());
  },
  "/new": () => {
    print(AboutPage.render());
  },
  "/new/:id": ({ data }) => {
    const { id } = data;
    print(DetailPage.render(id));
  },
  "/admin/dashboard": () => {
    printAdmin(AdminDashboard.render());
  },
  "/admin/news": () => {
    printAdmin(AdminNewList.render());
  },
  "/admin/news/add": () => {
    printAdmin(NewAdd.render());
  },
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    printAdmin(NewEdit.render(id));
  },
});
router.resolve();
