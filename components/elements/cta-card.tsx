"use client";
import directus from "@/lib/directus";
import Image from "next/image";
import { FormEvent, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const CTACard = ({ dictionary }: { dictionary: any }) => {
  // Server Actions Approach
  /* const formAction = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      await directus.items("subscribers").createOne({
        email,
      });
      revalidateTag("subscribers-count");
    } catch (error) {
      console.log(error);
    }
  };

  const subscribersCount = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
      next: {
        tags: ["subscribers-count"],
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.meta.total_count)
    .catch((error) => console.log(error)); */

  // Client Component Approach
  const [email, setEmail] = useState("");
  const [isHandling, setIsHandling] = useState(false);

  const submitHandler = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setIsHandling(true);
      await directus.items("subscribers").createOne({
        email,
      });
      setIsHandling(false);
      setEmail("");
    } catch (error) {
      console.log(error);
      setIsHandling(false);
    }
  };

  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      {/* Image */}
      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      {/* Conent Container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          {dictionary.ctaCard.title}
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          {dictionary.ctaCard.description}
        </p>
        {/* Form */}
        <form
          // Server Actions Approach
          /*  key={subscribersCount + "subscribers-form"}
          action={formAction} */
          onSubmit={submitHandler}
          className="flex items-center w-full gap-2 mt-6"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={dictionary.ctaCard.placeholder}
            className="w-full px-3 py-2 text-base rounded-md outline-none md:w-auto placeholder:text-sm bg-white/80 focus:ring-2 ring-neutral-600"
          />
          <button
            type="submit"
            className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200"
          >
            {!isHandling ? dictionary.ctaCard.button : "Sending..."}
          </button>
        </form>

        {/* Subscribers for Server Actions Approach */}
        {/*  <div className="mt-5 text-neutral-700">
          {dictionary.ctaCard.subscriberText1}{" "}
          <span className="px-2 py-1 text-sm rounded-md bg-neutral-700 text-neutral-100">
            {subscribersCount}
          </span>{" "}
          {dictionary.ctaCard.subscriberText2}
        </div> */}
      </div>
    </div>
  );
};

export default CTACard;
