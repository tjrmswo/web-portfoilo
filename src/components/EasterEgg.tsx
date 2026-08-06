"use client";

import { useEffect } from "react";

export default function EasterEgg() {
  useEffect(() => {
    console.log(
      "%c🔍 여기까지 개발자 콘솔을 열어보셨다면, 이미 절반은 동료시네요.",
      "font-size:15px;font-weight:bold;color:#8b5cf6;",
    );
    console.log(
      "%c코드가 더 궁금하시다면 → https://github.com/tjrmswo",
      "font-size:12px;color:#a1a1aa;",
    );
  }, []);

  return null;
}
