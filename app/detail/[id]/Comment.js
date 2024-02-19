"use client";

import { useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  return (
    <div>
      <div>댓글목록보여줄부분</div>
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
            body: JSON.stringify([comment, props.parentId]),
          });
        }}
      >
        댓글 전송
      </button>
    </div>
  );
}
