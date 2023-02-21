import React, { FC } from "react";

interface buttonProps {
  styleName: string;
  label: string;
  onClick: () => void;
}

export const Button: FC<buttonProps> = props => {
  const { styleName, label, onClick } = props;
  return (
    <div>
      <button className={styleName} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
