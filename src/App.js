import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

// a header (H1 size), a sub header (H2 size), 
// a link, inline code, a code block, a list item,
// a blockquote, an image, and bolded text

const App = () => {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:


  `);

  marked.setOptions({
    breaks: true
  })
  return (
    <div className="App">
      <div className="editordiv">
        <div className="toolbar">Editor</div>
        <textarea
          id="editor"
          onChange={(e) => setText(e.target.value)}
          value={text}
          rows="16"
          cols="66"
        ></textarea>
      </div>

      <div className="previewdiv">
        <i className="toolbar">Previewer</i>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
};

export default App;
