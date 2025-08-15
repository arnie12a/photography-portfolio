import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPostCardProps {
  href: string;
  title: string;
  description: string;
  image: any;
  alt: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  href,
  title,
  description,
  image,
  alt,
}) => {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
    >
      <div className="w-full h-60 relative">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default BlogPostCard;
