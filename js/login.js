// 로그인 체크
window.onload = function() {
    function initial_login_check(resp)
    {
        if(resp.trim().toLowerCase() === "true")
        {
            alert("이미 로그인 되어있습니다. 홈으로 이동합니다.");
            window.location.href = 'http://act.hoseo.ac.kr/hosmed/home.html';
        }
        else
        {
            //
        }
    }
    request("http://act.hoseo.ac.kr/hosmed/logincheck", "GET", initial_login_check);
};
