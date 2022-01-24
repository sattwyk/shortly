/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header() {
  return (
    <header className="flex flex-row items-center justify-items-center mt-5 gap-5 ">
      <h2 className="text-2xl font-bold ml-20">Shortly</h2>
      <a className="ml-5 text-xs text-gray-500" href="#">
        Features
      </a>
      <a className="text-xs text-gray-500" href="#">
        Pricing
      </a>
      <a className="mr-auto text-xs text-gray-500" href="#">
        Resources
      </a>
      <a className="text-xs text-gray-500" href="">
        Login
      </a>
      <a
        className=" px-3 py-1 bg-teal-400 rounded-2xl text-center text-xs text-slate-50 mr-20"
        href=""
      >
        Sign up
      </a>
    </header>
  );
}
