import { news } from "../../data";

const AdminNewList = {
  render() {
    return /* html */`
          
            <div class="flex flex-col max-w-7xl mt-4 mx-auto">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            STT
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created
                        </th>
                        <th scope="col-2" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            
                        </th>
                        <th scope="col-2" class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-green-700">
                            
                            <a href="/admin/news/add"><button class="w-full h-full text-white">Add</button></a>
                        </th>
                       
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${news.map((post) => /* html */`
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        ${post.id}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                        ${post.title}
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <div class="flex-shrink-0 h-10 w-10">
                                            <img class="h-full w-full" src="${post.img}" alt="">
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">${post.createdAt}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
                                </td>
                            </tr>
                        `).join("")}

                        <!-- More people... -->
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        `;
  },
};
export default AdminNewList;
