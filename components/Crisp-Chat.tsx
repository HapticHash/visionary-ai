"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("183404aa-e141-4329-9742-e34a2ccd57f7");
  }, []);

  return null;
};
