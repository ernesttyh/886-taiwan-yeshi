import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <div className="flex max-w-lg flex-col items-center gap-5">
          <span aria-hidden="true" className="font-brush text-7xl text-brand-red">夜市</span>
          <h1 className="display text-5xl text-brand-navy">That page wandered off</h1>
          <p className="text-brand-muted">Probably to find noodles. Try the menu, or come find us in Terminal 3.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="btn btn-red">See the menu</Link>
            <Link href="/find-us" className="btn btn-outline">Find us</Link>
          </div>
        </div>
      </main>
    </>
  );
}
