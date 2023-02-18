import React from "react";

const HeaderTime = () => {
  const timeList = new Date().toLocaleTimeString().split(":");
  const time = `${timeList[0]}:${timeList[1]}`;
  const dateList = new Date().toLocaleDateString("ko-KR").split(" ");
  const date = `${dateList[1].split(".")[0]}월 ${dateList[2].split(".")[0]}일`;
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const dayIndex = new Date().getDay();

  return (
    <div>
      <span>{time}</span>
      <span>•</span>
      <span>
        {date} ({dayList[dayIndex]})
      </span>
    </div>
  );
};

export default HeaderTime;
