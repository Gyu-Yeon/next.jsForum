import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title == "") {
      return res.status(500).json("아이디를 입력해주세요");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("login").insertOne(req.body);
      res.redirect(302, "/login");
    } catch (error) {
      console.log(error);
    }
  }
}

//회원가입 페이지 만들기
// 아이디 중복 체크
// 로그인 페이지 만들기
// 아이디 와 비밀번호 체크.
