import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "lorem ipsum dolor sit ammet concetatur adipisicing.",
      filesize: ".2mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem ipsum dolor sit ammet concetatur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "lorem ipsum dolor sit ammet concetatur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    {
        desc: "lorem ipsum dolor sit ammet concetatur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
      },
      {
        desc: "lorem ipsum dolor sit ammet concetatur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
      },
  ];

  return (
    <>
      <div
        className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap"
        ref={ref}
      >
        {data.map((item, index) => (
          <Card data={item} Reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
