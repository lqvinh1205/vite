import { news } from "../data";

const DetailPage = {
  render(id) {
    const result = news.find((post) => post.id === id);
    return `
                <div class="new-item border p-4">
                    <a href=""><img class="w-full h-80" src="${result.img}" alt=""></a>
                    <h1 class="text-orange-600 font-bold text-justify py-3">${result.title}</h1>
                    <span class="flex text-justify">${result.desc}</span>
                </div>
    `;
  },
};
export default DetailPage;
