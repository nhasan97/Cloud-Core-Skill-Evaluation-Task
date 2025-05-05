import { TReview } from "@/src/types";
import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReviewCard = ({ review }: { review: TReview }) => {
  const { name, image, say, rating } = review;

  const reviewBackgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
  };

  return (
    <div
      style={reviewBackgroundStyle}
      className="w-full h-full flex flex-col justify-center items-center gap-6 p-5 rounded-[10px]"
    >
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <Image
          width={100}
          height={100}
          src={image}
          alt="Client's Image"
          className="size-20 rounded-full object-fill object-center"
        />

        <h1 className="text-xl text-white">{name}</h1>
      </div>

      <div className="bg-[#424242] p-5 flex flex-col justify-center items-center gap-2 rounded-[10px]">
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        <p
          className="clamp-3-lines text-base text-[#cacaca] text-wrap"
          title={say}
        >
          {say}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
