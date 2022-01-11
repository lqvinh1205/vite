const Header = {
  render() {
    return `
        <div class="logo flex justify-center py-3 bg-blue-900">
            <a href="/about"><img class="h-20" src="https://ap.poly.edu.vn/images/logo.png" alt=""></a>
        </div>
        <div class="menu bg-orange-500 flex flex-row justify-between items-center">
            <nav>
                <ul class="flex flex-row" id="menu">
                    <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/">Trang chủ</a></li>
                    <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/tuyensinh">Tuyển sinh</a></li>
                    <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/daotao">Chương trình đào tạo</a></li>
                    <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/gocnhin">Góc nhìn sinh viên</a></li>
                    <li class="text-white px-4 hover:bg-blue-500 py-2 "><a href="/tuyendung">Tuyển dụng</a></li>
                </ul>
            </nav>
            <div class="search flex flex-col justify-end items-center">
                <div class="pr-2">
                    <a href="/signin"><button id="sign-in" class="border bg-blue-800 text-white p-1 px-3">Sign in</button></a>
                    <a href="/signup"><button id="sign-up" class="border bg-blue-800 text-white p-1 px-3">Sign up</button></a>
                </div>
            </div>
        </div>
    `;
  },
};
export default Header;
