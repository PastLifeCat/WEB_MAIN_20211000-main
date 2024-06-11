function logout()
{
    const logoutForm = document.getElementById('logout_form');
    const logoutBtn = document.getElementById('logout_btn');
    session_del(); // 세션 삭제
    //deleteCookie('id');
    setCookie("id", 0)
    location.href='../index.html'
}
document.getElementById("logout_btn").addEventListener('click', logout);

function session_del() 
{//세션 삭제
    if (sessionStorage) 
        {
            sessionStorage.removeItem("Session_Storage_object");
            sessionStorage.removeItem("Session_Storage_encrypted");
            alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
        } 
            else 
            {
                alert("세션 스토리지 지원 x");
            }
}

function setCookie(name, expiredays) 
    {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
    }