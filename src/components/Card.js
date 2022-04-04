import { useState, useEffect } from "react";

export default function Card({ para, idx, deleting, searchKey }) {
  const [vsi, setVsi] = useState({ display: "flex" });

  const handleOnClick = () => {
    deleting(idx);
  };

  useEffect(() => {
    if (!para.includes(searchKey)) {
      setVsi({ display: "none" });
    } else {
      setVsi({ display: "flex" });
    }
  }, [searchKey]);

  return (
    <div className="card" style={vsi}>
      <h4>Note: {idx}</h4>
      <p>{para}</p>
      <button onClick={handleOnClick}>Delete</button>
    </div>
  );
}
