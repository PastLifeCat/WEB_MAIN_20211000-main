function logout()
{
    const logoutForm = document.getElementById('logout_form');
    const logoutBtn = document.getElementById('logout_btn');
    session_del(); // 세션 삭제
    location.href='../index.html'
}
document.getElementById("logout_btn").addEventListener('click', check_input);

function session_del() 
{//세션 삭제
    if (sessionStorage) 
        {
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
        } 
        else 
        {
        alert("세션 스토리지 지원 x");
        }
}