export default function Layout({ children }) {
  /*return (
    <div className="flex h-screen bg-[#f5f5f9]">
      <div className="text-center py-10 ">{children}</div>
    </div>
  );*/

  return (
    <div className="flex h-screen bg-[#f5f5f9]">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div
          className={
            "bg-[url(https://img.freepik.com/vector-gratis/vector-brazo-robotico_23-2147491828.jpg?w=2000)] bg-cover bg-center"
          }
        >
          <div></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
