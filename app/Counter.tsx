"use client";
import React, { useState } from 'react'
export const Counter = () => {
    const [cnt,setCnt] = useState(0);
  return (
    <button onClick={()=>setCnt(cnt+1)}>
        Count: {cnt}

    </button>
  )
}
