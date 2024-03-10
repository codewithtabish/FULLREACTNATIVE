import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Markdown from 'react-native-markdown-display';

const markdownContent = `
  # Markdown Example

  Markdown is a lightweight markup language that allows you to write formatted text using a plain-text syntax. Various symbols have specific meanings in Markdown, making it easy to create well-structured documents.

  ## Markdown Symbols and Their Meanings:

  ### 1. # (Heading Levels)

  The number of # symbols at the beginning of a line determines the heading level. For example:
  \`\`\`
  # Heading Level 1
  ## Heading Level 2
  ### Heading Level 3
  #### Heading Level 4
  \`\`\`

  ### 2. * and _ (Emphasis)

  Use * or _ around a word or phrase to emphasize text:
  \`\`\`
  *italic* or _italic_
  **bold** or __bold__
  \`\`\`

  ### 3. * (Bullet List)

  Use * or - to create bullet points in an unordered list:
  \`\`\`
  - Item 1
  - Item 2
  \`\`\`

  ### 4. 1. (Numbered List)

  Use numbers followed by a period to create a numbered list:
  \`\`\`
  1. Item 1
  2. Item 2
  \`\`\`

  ### 5. > (Blockquote)

  Use > to create a blockquote for longer text passages:
  \`\`\`
  > This is a blockquote.
  > It can span multiple lines.
  \`\`\`

  ### 6. \` (Inline Code)

  Use backticks to format text as inline code:
  \`\`\`
  \`console.log("Hello, World!");\`
  \`\`\`

  ### 7. \`\`\` (Code Block)

  Use triple backticks to create a code block:
  \`\`\`javascript
  console.log("Hello, World!");
  \`\`\`

  ### 8. [Link](URL)

  Create hyperlinks using square brackets and parentheses:
  \`\`\`
  [Google](https://www.google.com)
  \`\`\`

  ### 9. ![Alt Text](Image URL)

  Insert images using an exclamation mark, square brackets, and parentheses:
  \`\`\`
  ![Logo](https://example.com/logo.png)
  \`\`\`

  *Add more explanations for other symbols as needed*
`;

const MarkdownExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Markdown>{markdownContent}</Markdown>
    </ScrollView>
  );
};

export default MarkdownExample;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor:"white"
  },
});
