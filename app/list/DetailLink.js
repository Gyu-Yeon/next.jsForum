"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        버튼
      </button>
    </div>
  );
}

//router.back() 뒤로가기
//router..forward() 앞으로가기
//router.refresh() 변경된 html만 새로고침 softRefresh
//router.prefetch() 페이지 미리로드
