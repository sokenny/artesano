import { useEffect, useState } from "react";
// import "./styles.scss";
import MemoizedTab from "./tab";

export default function App() {
  const [selectTab, setSelectTab] = useState("a");
  useEffect(()=>{
      console.log('Tab: ', selectTab)
  })
  console.log("parent render");
  return (
    <div className="App">
      <div className="tab-list">
        <MemoizedTab
          tab={"a"}
          title={"First Title"}
          setSelectTab={setSelectTab}
        />
        <MemoizedTab
          tab={"b"}
          title={"Second Title"}
          setSelectTab={setSelectTab}
        />
        <MemoizedTab
          tab={"c"}
          title={"Third Title"}
          setSelectTab={setSelectTab}
        />
      </div>
      {selectTab === "a" && <div>this is a {Date.now()}</div>}
      {selectTab === "b" && <div>this is b {Date.now()}</div>}
      {selectTab === "c" && <div>this is c {Date.now()}</div>}
    </div>
  );
}