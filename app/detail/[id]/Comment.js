"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  const { commentData } = props;
  console.log(props.parentId);

  const filteredComment = commentData.filter((item) => {
    if (item.parentId === props.parentId) {
      return item;
    }
  });

  useEffect(() => {
    fetch(`/api/comment/list?id=${props.parentId}`).then((response) => {
      response.json().then((result) => {
        console.log(result);
      });
    });
  }, []);

  return (
    <div>
      <div>
        {filteredComment.map((item) => {
          return <h1 key={item._id}>{item.comment}</h1>;
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

// GET 요청과 함께 데이터를 함께 보내려면,
// URL parameter / query string
