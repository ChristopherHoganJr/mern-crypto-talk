import React, { useState, useEffect } from "react";
import axios from "axios";

const Talk = () => {
  const [post, setPost] = useState("");

  const SubmitPost = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/posts",
        { post },
        { withCredentials: true }
      )
      .then((res) => console.log(res.data));
  };
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-3xl my-5">The talk page</h1>
      <section className="bg-red-100 flex justify-center">
        <form
          onSubmit={(e) => SubmitPost(e)}
          className="flex flex-col items-center gap-3 my-3"
        >
          <h2 className="text-center">Write your post</h2>
          <textarea
            type="text"
            name="post"
            value={post}
            className="border border-1 border-black py-1 px-2 w-96"
            onChange={(e) => setPost(e.target.value)}
          />
          <button className="p-2 bg-slate-100">Post</button>
        </form>
      </section>
      <section className="flex flex-col gap-5 border border-black py-5">
        <div className="border border-2 border-black p-3 max-w-xl mx-auto flex gap-3 items-center">
          <h4 className="border-r-2 border-black p-4">Name</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            nesciunt sequi, commodi soluta enim quia sed, amet quas modi
            aspernatur natus, alias distinctio totam doloribus ullam vel
            explicabo eum. Ullam.
          </p>
        </div>
        <div className="border border-2 border-black p-3 max-w-xl mx-auto flex gap-3 items-center">
          <h4 className="border-r-2 border-black p-4">Name</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            nesciunt sequi, commodi soluta enim quia sed, amet quas modi
            aspernatur natus, alias distinctio totam doloribus ullam vel
            explicabo eum. Ullam.
          </p>
        </div>
        <div className="border border-2 border-black p-3 max-w-xl mx-auto flex gap-3 items-center">
          <h4 className="border-r-2 border-black p-4">Name</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            nesciunt sequi, commodi soluta enim quia sed, amet quas modi
            aspernatur natus, alias distinctio totam doloribus ullam vel
            explicabo eum. Ullam.
          </p>
        </div>
        <div className="border border-2 border-black p-3 max-w-xl mx-auto flex gap-3 items-center">
          <h4 className="border-r-2 border-black p-4">Name</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            nesciunt sequi, commodi soluta enim quia sed, amet quas modi
            aspernatur natus, alias distinctio totam doloribus ullam vel
            explicabo eum. Ullam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Talk;
