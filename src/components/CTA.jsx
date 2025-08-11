import BlurText from "@/utils/blur-text";
import React from "react";

const CTA = () => {
  return (
    <div className="mx-[1rem] border border-[#ff5227] rounded-[1rem] lg:p-[4rem] p-[.5rem] lg:text-center text-start flex lg:items-center lg:justify-center my-[3rem] lg:mx-[2rem]">
      {/* <h1 className='lg:text-[3rem] text-[2.5rem] text-center lg:w-[800px] w-full'>Patty isn't just about burgers it’s a flavor adventure! Indulge in our handcrafted burgers, made with the finest ingredients to satisfy every craving.</h1> */}
      <div className="!block lg:w-[800px] w-full lg:text-center text-start">
        <BlurText
          text="Patty isn't just about burgers it’s a flavor adventure! Indulge in our handcrafted burgers, made with the finest ingredients to satisfy every craving."
          delay={10}
          animateBy="words"
          direction="top"
          className="!block lg:text-[3rem] text-[2.2rem] text-center"
        />
      </div>
    </div>
  );
};

export default CTA;
