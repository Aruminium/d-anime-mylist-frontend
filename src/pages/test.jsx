import Head from "next/head";
import Image from "next/image";
import makeIframe from "../utils/makeIframe";
import React, { useState, useEffect } from "react";

export default function Test() {
  const [Iframe, setIframe] = useState("<h1>ðãã¿ã³ãæ¼ãã¦ã­<h1>");
  const handleClick = () => {
    var uri = new URL(window.location.href);
    // URL (http://localhost, https://hoge.com)
    const host = uri.protocol + "//" + uri.host;
    // ãã¼ã¿ãã¼ã¹ã«å­å¨ãã¦ããIDãæå®ãã string
    const id = "gDFZeAvzxD1TjaaW";
    // åãè¾¼ã¿ããiframeã®ç¸¦æ¨ªã®ãµã¤ãº number
    const width = 300;
    const height = 500;
    // iframeã«ãªã¬ã³ã¸ã®æ ãä»ããã bool
    const border = true;
    const Iframe = makeIframe(host, id, width, height, border);
    setIframe(Iframe);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold underline">Testãã¼ã¸</h1>
      <br />
      <br />
      <div className="m-5">
        <button onClick={handleClick}>ãã¿ã³</button>
        <div dangerouslySetInnerHTML={{ __html: Iframe }} />
      </div>
    </div>
  );
}
