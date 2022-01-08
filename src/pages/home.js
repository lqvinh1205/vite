import Actions from "../components/actions";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/news-list";

const HomePage = {
  print() {
    return /* html */ `
      <div class="container max-w-5xl mx-auto">
        <header>
            ${Header.print()}
        </header>
        <main>
            <section class="banner mt-2">
            <a href="">
                <img src="https://ap.poly.edu.vn/images/Banner-AP.png" alt="">
            </a>
            </section>
            <section id="news">
                ${NewsList.print()}
            </section>
            <section id="action">
                ${Actions.print()}
            </section>
        </main>
        <footer class="bg-blue-900 flex justify-center py-3 mt-3 text-white">
            ${Footer.print()}
        </footer>
       </div>
    
    `;
  },
};
export default HomePage;
