export default function Login() {
  return (
    <div className="p-20">
      <h4>로그인</h4>
      <form action="api/login/login" method="POST">
        <input name="id" placeholder="아이디를 입력하세요" />
        <input name="password" placeholder="비밀번호를 입력하세요" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
