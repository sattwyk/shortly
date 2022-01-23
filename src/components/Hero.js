/* eslint-disable jsx-a11y/anchor-is-valid */
// import heroIllustration from "../assets/illustration-working.svg";

export default function Hero() {
  return (
    <main className="mt-5 py-5 bg-hero-illustration bg-contain bg-no-repeat bg-right-bottom">
      <h1 className="ml-20 mt-20 text-5xl font-bold max-w-md">
        More than just shorter links
      </h1>
      <p className="ml-20 max-w-xs text-sm text-gray-500 mb-5">
        Build your brands's recognition and get detailed insights on how your
        links are performing.
      </p>
      <a
        className="ml-20 px-3 py-1 rounded-2xl bg-teal-400 text-sm text-white"
        href=""
      >
        Get Started
      </a>
    </main>
  );
}
