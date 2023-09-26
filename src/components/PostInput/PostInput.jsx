import React from "react";
import { Button } from "../Button";

import "./style.css";

export const PostInput = () => {
  return (
    <div className="PostInput">
      <div className="stack">
        <div className="actions">
          <input
            type="text"
            placeholder="Escreva uma redação sobre..."
            className="input"
          />

          {/* <HelpText
            className="help-text-instance"
            state="active"
            text="Você também pode adicionar fotos sobre o tema ou caso prefira, gravar um vídeo."
          /> */}
          <div
            className="fab-soft-instance"
            color="default"
            labelClassName="design-component-instance-node"
            size="s"
            state="enabled"
            text="Image/Video"
            variant="extended"
          />
          <div
            className="fab-soft-instance"
            color="default"
            labelClassName="design-component-instance-node"
            size="s"
            state="enabled"
            text="Streaming"
            variant="extended"
          />
        </div>
        <Button
          className="button-instance"
          color="inherit"
          size="m"
          state="enabled"
          text="Enviar"
          variant="contained"
        />
      </div>
    </div>
  );
};

export default PostInput;
