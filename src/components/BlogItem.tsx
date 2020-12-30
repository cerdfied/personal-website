import React from "react";
type BlogItemProps = {
  title: string;
  url: string;
  image: any;
};

export default function BlogItem({ title, url, image }: BlogItemProps) {
  return (
    <div className="px-8 py-3 xs:px-3 flex flex-col fade-in-slow border blog-item">
      <img src={image} alt="Blog item" className="blog-item-img" />
      <div className="flex justify-between items-center pt-2">
        <div className="text-lg"> {title}</div>
        <a href={url} className="underline">
          View
        </a>
      </div>
    </div>
  );
}
