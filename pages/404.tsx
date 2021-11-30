import { useEffect } from "react";
import { useRouter } from "next/router";

export default function page404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1>Oooopss....</h1>
      <h4>Halaman yang anda cari tidak ditemukan</h4>
    </div>
  );
}
