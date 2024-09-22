"use client";
import { useEffect, useRef } from "react";
import contact from "./contct.module.css";

import VanillaTilt from "vanilla-tilt";

export default function ContactUsPage() {
  const boxRef = useRef();

  useEffect(() => {
    const tileNode = boxRef.current;
    VanillaTilt.init(tileNode, {
      max: 25,
      speed: 400,
    });
    return function cleanup() {
      tileNode.vanillaTilt.destroy();
    };
  });

  return (
    <main>
      <div ref={boxRef} className={contact.box}>
        <div className={contact.innerBox}>
          <p>Vanila</p>
        </div>
      </div>
    </main>
  );
}
