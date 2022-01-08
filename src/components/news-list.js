import { news } from "../data";

const NewsList = {
  print() {
    return `
        <h1 class="text-blue-900 font-bold text-3xl my-3">Tin tức học tập</h1>
        <div class="news grid grid-cols-3 gap-6" id="new">
        ${news.map((post) => `
                <div class="new-item border p-4">
                    <a href=""><img class="w-full h-80" src="${post.image}" alt=""></a>
                    <h1 class="text-orange-600 font-bold text-justify py-3">${post.title}</h1>
                    <span class="flex text-justify">${post.content}</span>
                </div>
            `).join("")}
        </div>
    `;
  },
};
export default NewsList;
