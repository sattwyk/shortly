/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import Shorten from "./Shorten";

export default function Link() {
  const [apiData, setApiData] = useState([]);

  const [fullLink, setFullLink] = useState("");

  const shortenElements = apiData.map((data) => (
    <Shorten
      id={data.id}
      orignalLink={data.orignalLink}
      shortLink={data.shortLink}
    />
  ));

  function handleChange(event) {
    const { value } = event.target;
    setFullLink(value);
  }

  async function handleClick() {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${fullLink}`);
    const data = await res.json();
    await setApiData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        orignalLink: fullLink,
        shortLink: data.result.short_link,
        success: true,
      },
    ]);
    // console.log(shortUrlList);
  }

  return (
    <div>
      <div className="flex bg-shorten-bg bg-slate-800 items-center justify-center gap-5 mx-20 mt-10 px-10 py-10 rounded-md">
        <input
          className="w-4/5 py-2 px-3 text-xs rounded-md"
          type="text"
          name="url"
          placeholder="Shorten a link here..."
          value={fullLink}
          onChange={handleChange}
        />
        <button
          className="bg-teal-500 py-1 px-5 rounded-md text-slate-50 text-sm"
          onClick={handleClick}
        >
          Shorten it!
        </button>
      </div>
      {apiData.length > 0 && shortenElements}
    </div>
  );
}
