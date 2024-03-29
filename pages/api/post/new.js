import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목을 적어주세요");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(req.body);
      console.log(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
