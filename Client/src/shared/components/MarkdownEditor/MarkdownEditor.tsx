import React, { useState } from 'react';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

interface MarkdownEditorProps {
   onChange: (value: string) => void;
   value: string;
}
const converter = new Showdown.Converter({
   tables: true,
   simplifiedAutoLink: true,
   strikethrough: true,
   tasklists: true
});

export function MarkdownEditor({ value }: MarkdownEditorProps) {

   const [valueState, setValueState] = useState(value);
   console.log(valueState);

   // const a = useCallback(
   //    (a) => {

   //       setValueState(a)
   //    },

   //    [])

   const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
      "write"
   );

   return (
      <div className="container">
         <ReactMde
            value={valueState}
            onChange={setValueState}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
               Promise.resolve(converter.makeHtml(markdown))
            }
         />
      </div>
   )
}
