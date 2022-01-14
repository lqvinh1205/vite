import Navigo from "navigo";
import AboutPage from "./pages/client/about";
import DetailPage from "./components/details";
import HomePage from "./pages/home";
import AdminDashboard from "./pages/admin/dashboard";
import NewsPage from "./pages/admin/news";
import NewAddPage from "./pages/admin/news/add";
import NewEditPage from "./pages/admin/news/edit";
import SigninPage from "./pages/client/signin";
import SignupPage from "./pages/client/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector("#app").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/signin": () => {
    print(SigninPage.render());
  },
  "/signup": () => {
    print(SignupPage.render());
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
    print(AdminDashboard.render());
  },
  "/admin/news": () => {
    print(NewsPage.render());
  },
  "/admin/news/add": () => {
    print(NewAddPage.render());
  },
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(NewEditPage.render(id));
  },
});
router.resolve();
