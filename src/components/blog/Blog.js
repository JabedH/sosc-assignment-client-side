import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Blog = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch(
      "https://sosc-assignment-server-side-production.up.railway.app/quotes",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);
  console.log(quotes);
  return (
    <div className="mt-10">
      <h3 className="my-10 text-2xl font-bold">All Quotes</h3>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 ">
        {quotes.map((quote) => (
          <div>
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {quote.name ? quote.name : "User"}
                </h2>
                <p>{quote.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
