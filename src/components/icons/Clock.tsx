export default function Clock(props: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z"
        fill="currentColor"
      />
    </svg>
  );
}
