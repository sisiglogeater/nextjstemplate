import React from "react";

const Dashboard = () => {
  return (
    <section>
      <div className="align-middle-top">
        <h1 className="head_text text-center">
          Note Important Things
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            By Sharing, You Can Help
          </span>
        </h1>
        <p className="desc text-center w-full">
          This website is to utilize our helpful commmunity by sharing important
          things that may be helpful to others.
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
