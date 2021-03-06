import Link from "next/link";
import Image from "next/image";

export default function myListAllHeader() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary-orange p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="mr-4">
          <Image src="/images/LogoIcon.png" width={50} height={50} alt="logo" />
        </div>
        <span className="font-semibold text-xl tracking-tight">
          d anime MyList
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 font-medium hover:text-white mr-4">
            <Link href="/">トップ</Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 font-medium hover:text-white mr-4">
            <Link href="/myList">MyList一覧</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
