import { Link } from "solid-app-router";
import { Component } from "solid-js";

const PDF: Component<{ src: string }> = ({ src }) => {
  return (
    <object
      className="min-w-screen min-h-screen"
      data={src}
      type="application/pdf"
    >
      <div className="w-8/10 mt-10 flex flex-col mx-auto text-center">
        <iframe src={src}></iframe>
        Váš prohlížeč nepodporuje přímé zobrazení PDF
        <Link className="mt-5" href="/">
          Zpět na hlavní web
        </Link>
      </div>
    </object>
  );
};

export default PDF;
