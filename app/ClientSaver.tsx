"use client";

import { useEffect } from "react";

export default function ClientSaver({data}: {data:any})
{
    useEffect(()=>{
        localStorage.setItem("Data", JSON.stringify(data));
    },[data])
    return(
        <>
            <p>Data Saved successfully!!</p>
            
        </>
        
    )
}