import Image from "next/image"; // remove for disabling Optimized Image API

const loader = ({ src, width, quality }) => {
  return `https://mirbostani.com/public/image/${src}?width=${width}&quality=${quality}`;
};

export default function ImageX(props) {
  return <Image unoptimized={true} {...props} loader={loader}/> // remove for disabling Optimized Image API
  // return <img {...props} />;
}
