import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
  document.getElementById("app").innerHTML = content.print();
};
router.on({
  "/": () => render(HomePage),
  "/home": () => render(HomePage),
  "/tuyensinh": () => render(AboutPage),
  "/daotao": () => render(AboutPage),
});
router.notFound(() => render("<h1>not found 404</h1>"));
router.resolve();

// const showMenu = () => {
//   const menuElement = document.getElementById("menu");
//   if (menuElement) {
//     const result = menus.map((menu) => `
//         <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="">${menu}</a></li>
//         `);
//     menuElement.innerHTML += result.join("");
//   }
// };
// showMenu();

// const showNew = () => {
//   const newElement = document.querySelector("#new");
//   if (newElement) {
//     const result2 = news.map((new1) => `
//         <div class="new-item border p-4">
//             <a href=""><img class="w-full h-80" src="${new1.image}" alt=""></a>
//             <h1 class="text-orange-600 font-bold text-justify py-3">${new1.title}</h1>
//             <span class="flex text-justify">${new1.content}</span>
//           </div>
//         `);
//     newElement.innerHTML += result2.join("");
//   }
// };
// showNew();

// const showAction = () => {
//   const actionElement = document.querySelector("#actions");
//   if (actionElement) {
//     const result3 = actions.map((action) => `
//           <div class="new-item border p-4">
//               <a href=""><img class="w-full h-80" src="${action.image}" alt=""></a>
//               <h1 class="text-orange-600 font-bold text-justify py-3">${action.title}</h1>
//               <span class="flex text-justify">${action.content}</span>
//             </div>
//           `);
//     actionElement.innerHTML += result3.join("");
//   }
// };
// showAction();
