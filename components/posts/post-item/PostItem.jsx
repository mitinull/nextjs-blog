import Link from "next/link";

export const PostItem = (props) => {
  const { slug, title, excerpt, image, date } = props;
  return (
    <li>
      <Link href={"/hi"}>
        {slug + title + excerpt + image + date}
      </Link>
    </li>
  );
};
