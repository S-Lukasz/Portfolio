import React from "react";

export const Text = ({
  text,
  className = "",
  linkName,
  specialText,
  specialClassName = "",
}: {
  text: string;
  className?: string;
  linkName?: string;
  specialText?: string;
  specialClassName?: string;
}) => {
  const tempArr = specialText ? text.split(specialText) : [];
  const content =
    tempArr.length === 2 ? (
      <>
        {tempArr[0]} <a target="blank" href={linkName} className={specialClassName}>{specialText}</a> {tempArr[1]}
      </>
    ) : (
      text
    );
  return (
    <p className={className}>
      {content}
    </p>
  );
};