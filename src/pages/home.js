import Actions from "../components/actions";
import Banner from "../components/banner";
import NewsList from "../components/news-list";

const HomePage = {
  render() {
    return /* html */ `
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
    `;
  },
};
export default HomePage;
