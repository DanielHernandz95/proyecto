import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function Nav(handleSignOut) {
  const inactiveLink = "flex gap-1 p-1 hover:bg-[#f8f8f9]";
  const activeLink = inactiveLink + " bg-[#e7e7ff] text-[#696cff] rounded-l-lg";
  const router = useRouter();
  const { pathname } = router;
  function handleSignOut() {
    signOut();
  }
  return (
    <aside className="text-[#697a8d] p-4 pt-2 pr-0">
      <div className=" bg-white rounded-l-lg">
        <Link
          href={"http://190.131.200.98/neotic/public/"}
          className="flex gap-1 mb-4 p-4 mr-4 text-black"
        >
          <img
            src="data:image/png;base64,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"
            width={60}
          ></img>
          <span className="text-[1.75rem] font-bold font-sans text-[#566a7f] ">
            neotic
          </span>
        </Link>
      </div>
      <nav className="flex flex-col gap-2">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Inicio
        </Link>
        <Link
          href={"/consola"}
          className={pathname.includes("/consola") ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          Consola
        </Link>
        <Link
          href={"/manual"}
          className={pathname.includes("/manual") ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          Manual
        </Link>
        <Link
          href={"/cuenta"}
          className={pathname.includes("/cuenta") ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Cuenta
        </Link>
        <Link
          onClick={handleSignOut}
          href={"/cuenta"}
          className={pathname.includes("/cuenta") ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Cerrar Sesión
        </Link>
      </nav>
    </aside>
  );
}
