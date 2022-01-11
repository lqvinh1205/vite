import { news } from "../data";

const NewsList = {
  render() {
    return `
        <h1 class="text-blue-900 font-bold text-3xl my-3">Tin tức học tập</h1>
        <div class="news grid grid-cols-3 gap-6" id="new">
        ${news.map((post) => `
                <div class="new-item border p-4">
                    <a href="/new/${post.id}"><img class="w-full h-80" src="${post.img}" alt=""></a>
                    <h1 class="text-orange-600 font-bold text-justify py-3"><a href="/new/${post.id}">${post.title}</a></h1>
                    <span class="flex text-justify">${post.desc}</span>
                </div>
            `).join("")}
        </div>
    `;
  },
};
export default NewsList;
