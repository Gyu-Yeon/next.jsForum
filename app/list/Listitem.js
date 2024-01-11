"use client";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem(props) {
  const handleClick = (e) => {
    e.target.parentElement.style.opacity = 0;
    setTimeout(() => {
      e.target.parentElement.className = "trashedCan";
    }, 1000);
  };

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
              className="trashCan"
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: item._id.toString(),
                }).then(() => {
                  handleClick(e);
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
