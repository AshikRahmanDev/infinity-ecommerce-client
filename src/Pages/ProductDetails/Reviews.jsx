import React from "react";

const Reviews = () => {
  return (
    <div className="mt-5 logo-font">
      <h4 className="text-xl border-b border-gray-400/40 pb-3">Reviews (0)</h4>
      {/* reviews */}
      <div className="lg:flex justify-between py-5">
        {/* customer's reviews */}
        <div>
          <h4 className="text-lg">Customer's Reviews</h4>
        </div>
        {/* add your review */}
        <div className="lg:w-[40%]">
          <h4 className="text-xl">Add a review</h4>
          <p className="text-[10px] text-gray-400 mt-2">
            Your email address will not be published. Required fields are
            marked*
          </p>
          {/* rating */}
          <div className="flex items-center my-3">
            <p className="text-[12px] mr-2">YOUR RATING</p>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-primary"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-primary"
              />
            </div>
          </div>
          {/* review form */}
          <form>
            {/* details */}
            <div className="my-5">
              <input
                className="border-b py-2 pb-16 px-1 w-full text-[13px] mr-5"
                type="text"
                placeholder="Write your review here"
                required
              />
            </div>
            {/* user details */}
            <div>
              {/* first name */}
              <input
                className="border-b py-2 px-3 w-[47%] text-[13px] mr-5"
                type="text"
                //   {...register("firstName")}
                name="firstName"
                placeholder="Full Name"
                required
              />
              {/* email */}
              <input
                className="border-b py-2 px-3 w-[47%] text-[13px]"
                type="text"
                //   {...register("lastName")}
                name="lastName"
                placeholder="Your E-mail"
                required
              />
            </div>
            {/*  */}
            <div className="my-5 flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-xs"
              />
              <span className="text-[12px] ml-3">
                Save my name & email in this browser for next time i comment
              </span>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-sm rounded-sm text-white font-normal"
              value="submit review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
