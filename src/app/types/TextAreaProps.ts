import React from "react";

type TextAreaProps = {
  title?: string;
  name?: string;
  description?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default TextAreaProps;
