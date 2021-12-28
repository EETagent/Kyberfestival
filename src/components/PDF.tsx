import { Link } from "solid-app-router";
import { Component } from "solid-js";

const PDF: Component<{ src: string; srcFallback: string }> = ({
  src,
  srcFallback,
}) => {
  return (
    <object
      className="min-w-screen min-h-screen"
      data={src}
      type="application/pdf"
    >
      <iframe className="min-w-full min-h-screen" src={srcFallback}></iframe>
    </object>
  );
};

export default PDF;
