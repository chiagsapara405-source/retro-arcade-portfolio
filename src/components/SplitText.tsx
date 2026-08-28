import React from "react";

interface SplitTextProps {
  children: React.ReactNode;
  className?: string;
}

const processNode = (node: React.ReactNode, index: number): React.ReactNode => {
  if (typeof node === "string") {
    const words = node.split(" ");
    return words.map((word, wIdx) => {
      if (!word) return null;
      return (
        <span key={`${index}-${wIdx}`} className="word-wrap">
          <span className="word">{word}</span>
          {wIdx < words.length - 1 ? "\u00A0" : ""}
        </span>
      );
    });
  }

  if (React.isValidElement(node)) {
    if (node.type === "br") {
      return <br key={`br-${index}`} />;
    }
    const element = node as React.ReactElement<{
      children?: React.ReactNode;
      className?: string;
    }>;
    if (element.props && element.props.children) {
      return (
        <span key={`el-${index}`} className={element.props.className}>
          {React.Children.toArray(element.props.children).map((child, cIdx) =>
            processNode(child, cIdx)
          )}
          {"\u00A0"}
        </span>
      );
    }
  }

  return node;
};

const SplitText: React.FC<SplitTextProps> = ({ children, className = "" }) => {
  return (
    <span className={`split-text ${className}`}>
      {React.Children.toArray(children).map((child, idx) =>
        processNode(child, idx)
      )}
    </span>
  );
};

export default SplitText;
