import Actions from "../components/actions";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/news-list";

const HomePage = {
  render() {
    return /* html */ `
            <div class="max-w-5xl mx-auto min-h-screen relative pb-20" id="container">
                <header id="header">
                    ${Header.render()}
                </header>
            
                <main>
                    <section class="banner mt-2">
                        ${Banner.render()}
                    </section>
                    <section id="news">
                        ${NewsList.render()}
                    </section>
                    <section id="action">
                        ${Actions.render()}
                    </section>
                </main>

                <footer id="footer" class="bg-blue-900 flex justify-center py-3 mt-3 text-white inset-x-0 absolute bottom-0">
                    ${Footer.render()}
                </footer>
            
            </div>
        `;
  },
};
export default HomePage;
