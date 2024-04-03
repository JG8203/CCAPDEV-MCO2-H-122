"use client";

import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin } from '@mdxeditor/editor';
import { FC } from 'react';
import '@mdxeditor/editor/style.css';

interface EditorProps {
  markdown: string;
  onChange: (newMarkdown: string) => void;
}

const EditorComponent: FC<EditorProps> = ({ markdown, onChange }) => {
  return (
    <MDXEditor
      markdown={markdown}
      onChange={onChange}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
            </>
          ),
        }),
      ]}
    />
  );
};

export default EditorComponent;
