import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, vsDark, atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const markdownCustomComponents = {
  p(p) {
    if (p.children[0].type === "img") {
      const { alt, src } = p.children[0].props;
      const imagePath = `/images/posts/${slug}/${src}`;
      console.log(image);
      return (
        <div className={styles.image}>
          <Image alt={alt} src={imagePath} width={640} height={380} />
        </div>
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
};
