import React from "react";

const VideoSection = ({ video }: { video: string }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-6 bg-[url('/assets/images/video-bg.png')] bg-cover bg-center bg-no-repeat rounded-[10px]">
      <div className="w-full md:w-[25%] border-l border-[#adadad]">
        <p className="text-2xl md:text-3xl xl:text-5xl text-center font-bold">
          Style That Stays Sharp
        </p>
      </div>

      <div className="w-full md:w-[75%]">
        <video
          src={video}
          // poster={poster}
          controls={true}
          autoPlay={false}
          loop={false}
          muted={false}
          // style={{ maxWidth: "100%", borderRadius: "0.5rem" }}
          className="w-full h-full rounded-[10px]"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
