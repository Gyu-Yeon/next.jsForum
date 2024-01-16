import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.id == "") {
      console.log(req.body);
      return res.status(500).json("아이디를 입력해주세요");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("login").find().toArray();
      // console.log(result);
      let ss = req.body;
      res.status(200).json(ss);
    } catch (error) {
      console.log(error);
    }
  }
}

//   let checkId = result.filter((item) => {
//     return (item.id = req.body.id);
//   });
//   console.log(checkId);
//   if (checkId) {
//     if (checkId.password === req.body.password) {
//       res.redirect(302, "/list");
//     }
//   }
//   res.redirect(302, "/login");
