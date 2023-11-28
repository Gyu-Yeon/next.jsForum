import { connectDB } from "@/util/database";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ title: "안녕" });
  console.log(props);

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>글제목</h4>
      <p>글내용</p>
    </div>
  );
}
