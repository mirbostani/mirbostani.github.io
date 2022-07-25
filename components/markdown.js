import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as LightStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { prism as DarkStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import LightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/coy-without-shadows";
// import { monokai as LightStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

function components(darkMode) {
  return {
    img({ node, inline, className, children, ...props }) {
      props.src = props.src.replace(/^\.\.\/public/, "");
      return <img {...props} />;
    },
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <>
          <SyntaxHighlighter
            className="sk-syntax-light rounded-lg overflow-hidden"
            style={LightStyle}
            language={match[1]}
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            showLineNumbers={true}
            customStyle={{
              backgroundColor: "rgba(245, 245, 245, 1)", // bg-gray-100
              opacity: "1",
            }}
            codeTagProps={{
              style: {
                backgroundColor: "transparent",
              },
            }}
            {...props}
          />
          <SyntaxHighlighter
            className="sk-syntax-dark rounded-lg overflow-hidden"
            style={DarkStyle}
            language={match[1]}
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            showLineNumbers={true}
            customStyle={{
              backgroundColor: "rgba(52, 52, 52, 1)", // dark:bg-gray-800
              opacity: "1",
            }}
            codeTagProps={{
              style: {
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "transparent",
                textShadow: "none",
              },
            }}
            {...props}
          />
        </>
      ) : (
        <code
          className="bg-gray-200 dark:bg-gray-800 px-1 font-mono text-sm"
          style={{ borderRadius: "4px" }}
          {...props}
        >
          {children}
        </code>
      );
    },
    h1({ node, inline, className, children, ...props }) {
      const id = children
        .join("")
        .toLowerCase()
        .replace(/\s+|[^a-z0-9]/gi, "_");
      return (
        <>
          <a id={id} className="heading-anchor"></a>
          <h1>{children}</h1>
        </>
      );
    },
    h2({ node, inline, className, children, ...props }) {
      const id = children
        .join("")
        .toLowerCase()
        .replace(/\s+|[^a-z0-9]/gi, "_");
      return (
        <>
          <a id={id} className="heading-anchor"></a>
          <h2>{children}</h2>
        </>
      );
    },
    h3({ node, inline, className, children, ...props }) {
      const id = children
        .join("")
        .toLowerCase()
        .replace(/\s+|[^a-z0-9]/gi, "_");
      return (
        <>
          <a id={id} className="heading-anchor"></a>
          <h3>{children}</h3>
        </>
      );
    },
  };
}

export default function Markdown({ children, darkMode }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components(darkMode)}
    >
      {children}
    </ReactMarkdown>
  );
}
