"use client";

import React from "react";
import PageLoader from "src/components/common/PageLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  );
}
