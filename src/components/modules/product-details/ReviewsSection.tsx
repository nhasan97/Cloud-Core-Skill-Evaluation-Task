import React from "react";
import reviews from "../../../../public/data/clientReviews.json";
import NoData from "../../shared-components/NoData";
import ReviewCard from "../../UI/cards/ReviewCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { TReview } from "@/src/types";
import "../../../styles/text.css";
import "../../../styles/scrollBar.css";
import SectionHeading from "../../UI/SectionHeading";

const ReviewsSection = () => {
  const slideRight = () => {
    const slider = document.getElementById("review-cards-slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };
  const slideLeft = () => {
    const slider = document.getElementById("review-cards-slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  return (
    <div className="w-full h-full">
      <SectionHeading text={`Ratings and Reviews (${reviews?.length})`} />
      {reviews?.length <= 0 ? (
        <NoData text="No reviews yet" />
      ) : (
        <div className="w-full flex justify-between items-center gap-1 md:gap-6">
          <button
            className={`btn-style-icon-only btn-style-dark`}
            onClick={() => slideLeft()}
          >
            <FaChevronLeft />
          </button>

          <div
            id="review-cards-slider"
            className="w-full flex justify-evenly items-center gap-6 overflow-x-scroll slider-scrollbar-style transition-all whitespace-nowrap"
          >
            {reviews?.map((review: TReview) => (
              <ReviewCard key={review?._id} review={review} />
            ))}
          </div>

          <button
            className="btn-style-icon-only btn-style-dark"
            onClick={() => slideRight()}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
