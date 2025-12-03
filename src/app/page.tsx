"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState<number>(0);
  const isVerdade: boolean = false;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Label style={{padding: 24}}>Voce apertou {count} vezes</Label>
      <Button variant={"default"} onClick={() => setCount(count + 1)}>Somar</Button>
    </div>
  );
}
