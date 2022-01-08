import { actions } from "../data";

const Actions = {
  print() {
    return `
      <h1 class="text-blue-900 font-bold text-3xl my-3">Hoạt động sinh viên</h1>
      <div class="actions grid grid-cols-3 gap-6" id="actions">
      ${actions.map((action) => `
            <div class="new-item border p-4">
              <a href=""><img class="w-full h-80" src="${action.image}" alt=""></a>
              <h1 class="text-orange-600 font-bold text-justify py-3">${action.title}</h1>
              <span class="flex text-justify">${action.content}</span>
            </div>
      `).join("")}
      </div>
    `;
  },
};
export default Actions;
