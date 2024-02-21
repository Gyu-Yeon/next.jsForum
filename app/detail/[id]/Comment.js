"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  console.log(props);
  return (
    <div>
      <div>
        {props.commentData.map((item) => {
          return <h1>{item.comment}</h1>;
        })}
      </div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({ comment: comment, parent: props.parentId }),
          });
        }}
      >
        댓글 전송
      </button>
    </div>
  );
}
