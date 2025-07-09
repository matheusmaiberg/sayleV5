import React, { useMemo } from "react";

export function useColorizedBrackets(
  text: string,
  colorClass = "bg-brand-gradient bg-clip-text text-transparent"
) {
  return useMemo(() => {
    const regex = /\[([^\]]+)\]/g;
    const result: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push(<span key={key++}>{text.substring(lastIndex, match.index)}</span>);
      }
      result.push(
        <span key={key++} className={colorClass}>
          {match[1]}
        </span>
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      result.push(<span key={key++}>{text.substring(lastIndex)}</span>);
    }
    return result;
  }, [text, colorClass]);
} 