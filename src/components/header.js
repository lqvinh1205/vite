const Header = {
  print() {
    return `
        <div class="logo flex justify-center py-3 bg-blue-900">
        <a href="/about"><img class="h-20" src="https://ap.poly.edu.vn/images/logo.png" alt=""></a>
        </div>
        <div class="menu bg-orange-500 flex flex-row justify-between">
        <nav>
            <ul class="flex flex-row" id="menu">
                <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/home">Trang chủ</a></li>
                <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/tuyensinh">Tuyển sinh</a></li>
                <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/daotao">Chương trình đào tạo</a></li>
                <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/gocnhin">Góc nhìn sinh viên</a></li>
                <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/tuyendung">Tuyển dụng</a></li>
            </ul>
        </nav>
        <div class="search flex justify-end items-center">
            <form action="" class="px-2">
            <input type="search">
            <button class="font-light text-white bg-blue-900 px-2 border">TÌM KIẾM</button>
            </form>
        </div>
        </div>
    `;
  },
};
export default Header;
