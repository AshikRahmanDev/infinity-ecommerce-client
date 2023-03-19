import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import ReviewCard from "./ReviewCard";

const Reviews = ({ id }) => {
  const { register, handleSubmit, reset } = useForm();
  // get product reviews
  const getProduct = async () => {
    const res = await fetch(`http://localhost:5000/product/review/${id}`);
    return res.json();
  };
  const { data: reviews, isLoading, refetch } = useQuery("product", getProduct);
  console.log(reviews);
  // add review in product
  const onSubmit = (data) => {
    const { review, name, email } = data;
    const rev = {
      review,
      name,
      email,
    };
    fetch(`http://localhost:5000/product/review/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rev),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
        }
      });
    reset();
  };
  return (
    <div className="w-full mt-5 logo-font">
      <h4 className="text-xl border-b border-gray-400/40 pb-3">
        Reviews ({reviews?.length ? reviews.length : 0})
      </h4>
      {/* reviews */}
      <div className="lg:flex justify-between gap-8 py-5">
        {/* customer's reviews */}
        <div className="lg:w-[50%]">
          <h4 className="text-lg">Customer's Reviews</h4>
          {!isLoading && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 my-5">
              {reviews?.map((review) => (
                <ReviewCard data={review} key={review.id} />
              ))}
            </div>
          )}
        </div>
        {/* add your review */}
        <div className="lg:w-[50%]">
          <h4 className="text-xl">Add a review</h4>
          <p className="text-[10px] text-gray-400 mt-2">
            Your email address will not be published. Required fields are
            marked*
          </p>

          {/* review form */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
            {/* details */}
            <div className="my-5">
              <textarea
                className="border-b py-2 pb-16 px-1 w-full text-[13px] mr-5"
                {...register("review")}
                type="text"
                placeholder="Write your review here"
                required
              />
            </div>
            {/* user details */}
            <div>
              {/* full name */}
              <input
                className="border-b py-2 px-3 w-[47%] text-[13px] mr-5"
                type="text"
                {...register("name")}
                name="name"
                placeholder="Full Name"
                required
              />
              {/* email */}
              <input
                className="border-b py-2 px-3 w-[47%] text-[13px]"
                type="email"
                {...register("email")}
                name="email"
                placeholder="Your E-mail"
                required
              />
            </div>
            {/*  */}
            <div className="my-5 flex items-center">
              <input
                type="checkbox"
                checked
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
