import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  // console.log(props.params.id);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  let commentData = await db.collection("comment").find().toArray();
  console.log(commentData);
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment parentId={props.params.id} commentData={commentData} />
    </div>
  );
}

// form 태그 안쓰는 이유는 서버로 전송버튼을 누르면 새로고침이 되기 때문에 CSR(Client Side Rendering)으로
//새로고침이 발생하지 않고 사용자의 인터렉션에 반응할 수 있도록 제작.
