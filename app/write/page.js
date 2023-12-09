export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="api/test" method="POST">
        <input type="text" name="emial" id="EMAIL" />
        <input type="password" name="password" id="PW" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
