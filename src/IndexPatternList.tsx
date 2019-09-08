import * as React from "react";
import { IndexPattern } from "./store/kibana/types";

interface IndexPatternsProps {
  indexPatterns: IndexPattern[];
}

const ChatHistory: React.SFC<IndexPatternsProps> = ({ indexPatterns }) => {
  // console.log("indexPatterns are: ", indexPatterns);
  return (
    <div>
      <h2>Index-Patterns</h2>
      <select>
        {indexPatterns.map(indexPattern => (
          <option key={indexPattern.id} value={indexPattern.id}>
            {indexPattern.attributes.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChatHistory;
