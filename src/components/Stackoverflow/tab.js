import { memo } from "react";

const MemoizedTab = memo(({ title, tab, setSelectTab }) => {
  console.log("child render");
  const handleClick = (tab) => {
    setSelectTab(tab);
  };
  return <p onClick={() => handleClick(tab)}>{title}</p>;
});

export default MemoizedTab;