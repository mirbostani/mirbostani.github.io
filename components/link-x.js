import Link from "next/link";

export default function LinkX({ children, ...props }) {
  if (props.href && props.href.query) {
    if (props.href.query.lang === "fa") {
      props.href.query = { lang: "fa" };
    } else {
      props.href.query = {};
    }
  }
  return <Link {...props}>{children}</Link>;
}
