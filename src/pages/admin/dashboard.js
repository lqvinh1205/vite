import Navbar from "../../components/admin/navbar";
import Footer from "../../components/footer";

const AdminDashboard = {
  render() {
    return /* html */`
        <div class="d-flex items-center">
            <nav class="bg-gray-800">
                ${Navbar.render()}
            </nav>
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                    Dashboard
                    </h1>
                </div>
            </header>

            <main>
                <div class="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
                    
                </div>
            </main>

            <footer id="footer" class="bg-blue-900 flex justify-center py-3 mt-3 text-white inset-x-0">
                ${Footer.render()}
            </footer>
        </div>
        `;
  },
};
export default AdminDashboard;
