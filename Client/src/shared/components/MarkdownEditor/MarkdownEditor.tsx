import React, { useCallback, useState } from 'react';
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

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {

   const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
      "write"
   );

   const [valueState, setValueState] = useState(value);


   const setValueStateOutside = useCallback(
      (value: string) => {
         setValueState(value)
         onChange(value)
      },
      [onChange],
   )



   return (
      <div className="container">
         <ReactMde
            value={valueState}
            onChange={setValueStateOutside}
            // onChange={setValueState}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
               Promise.resolve(converter.makeHtml(markdown))
            }
            childProps={{
               writeButton: {
                  tabIndex: -1
               }
            }}
         />
      </div>
   )
}
