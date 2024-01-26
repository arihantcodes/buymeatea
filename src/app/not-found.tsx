import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center mb-12">
      <Image src="/notfound.svg" height={900} width={900} alt="" />
     <Link href="/">
     <Button variant="destructive">Back To Home</Button>
     </Link>

    </div>
  );
}


