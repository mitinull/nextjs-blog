import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./PostDetail.module.css";
import Image from "next/image";

export const markdownCustomComponents = (slug) => ({
  p(p) {
    if (p.children[0].type === "img") {
      const { alt, src } = p.children[0].props;
      const imagePath = `/images/posts/${slug}/${src}`;
      return (
        <Image alt={alt} src={imagePath} width={640} height={380} />
      );
    }

    return <p>{p.children}</p>;
  },

  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, "")}
        style={atomDark}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
});
