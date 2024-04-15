import { useState } from "react";
import data from "../../resources/countryData.json";
import '../App.css'

export default function Search() {
  const [state, setState] = useState("");

  const onChange = (event) => {
    setState(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setState(searchTerm);
  };

  const handleKey = (e) => {
    if (e.key === "Escape") {
      console.log("Escape clicked")
      document.getElementById("dropdown").style.display = "none";
    } else {
      document.getElementById("dropdown").style.display = "inline";
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={state} onChange={onChange} onKeyDown={handleKey} /><span><button>Search</button></span>
      </div>
      <div id="dropdown">
        {data
          .filter((item) => {
            const searchTerm = state.toLowerCase();
            const fullName = item.name.toLowerCase();
            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div onClick={() => onSearch(item.name)} key={item.name}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
}