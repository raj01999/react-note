import { useState, useEffect } from "react";

export default function Card({
  para,
  idx,
  deleting,
  searchKey,
  reload,
  notes,
}) {
  const [vsi, setVsi] = useState({ display: "flex" });

  const handleOnClick = () => {
    const check = window.confirm("Do you want to delete?");
    if (!check) return;
    deleting(idx);
  };

  useEffect(() => {
    const key = searchKey.split(" ")[0].toLowerCase();
    if (para.toLowerCase().includes(key)) {
      setVsi({ display: "flex" });
    } else {
      setVsi({ display: "none" });
    }
  }, [searchKey, para]);

  useEffect(() => {
    setVsi({ display: "flex" });
  }, [reload, notes]);

  return (
    <div className="card" style={vsi}>
      {/* {console.log("Card Rander")} */}
      <h4>Note: {idx}</h4>
      <p>{para}</p>
      <button onClick={handleOnClick}>Delete</button>
    </div>
  );
}
