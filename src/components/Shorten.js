/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Shorten(props) {
  return (
    <div className="mx-20 my-5 flex py-2 px-3 items-center bg-violet-500 rounded-md gap-3">
      <p className="mr-auto truncate max-w-md">{props.orignalLink}</p>
      <p className="text-slate-100 ">{props.shortLink}</p>
      <a
        className="px-2 py-1 rounded-md text-xs bg-purple-50"
        onClick={() => navigator.clipboard.writeText(props.shortLink)}
        href="#"
      >
        Copy
      </a>
    </div>
  );
}
