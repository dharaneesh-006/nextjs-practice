// import Link from "next/link";
// import { Counter } from "./Counter";
import ClientSaver from "./ClientSaver";

// export default function Home()
// {
//   return(
//     <>
//       <h1>Server Page</h1>
//       <Counter/>
//     </>
//   )
// }

export default function Page()
{
  const data = {
    theme : "dark",
    name : "dharaneesh",
    userId : 14
  };
  return(
    <>
      <ClientSaver data={data}/>
    </>
  )
}