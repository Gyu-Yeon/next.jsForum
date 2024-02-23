"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);
  const { commentData } = props;

  useEffect(() => {
    fetch(`/api/comment/list?id=${props.parentId}`).then((response) => {
      response.json().then((result) => {
        setData(result);
      });
    });
  }, []);

  return (
    <div>
      <div>
        {data.map((item) => {
          return <h5 key={item._id}>{item.comment}</h5>;
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
