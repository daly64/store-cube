"use client";
import useStore from "@/tools/client/zustand/producctStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const { toggleAddProductDialog } = useStore();
const router = useRouter();
useEffect(()=>{
  router.push("/Dashboard");
})
  return (
    <main>
     
      
    </main>
  );
}
