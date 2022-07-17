import { Component } from "solid-js";

const PDF: Component<{ src: string; srcFallback: string }> = (props) => {
  return (
    <object
      class="min-w-screen min-h-screen"
      data={props.src}
      type="application/pdf"
    >
      <iframe class="min-w-full min-h-screen" src={props.srcFallback} />
    </object>
  );
};

export default PDF;
