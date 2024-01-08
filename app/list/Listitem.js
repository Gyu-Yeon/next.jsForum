"use client";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((item) => {
        return (
          <div className="list-item" key={item._id}>
            <Link prefetch={false} href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <Link href={`/edit/${item._id}`}>✏️</Link>
            <span
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: item._id,
                }).then(() => {
                  console.log("삭제완료");
                });
              }}
            >
              🗑️
            </span>
            {/* <DetailLink /> */}
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
