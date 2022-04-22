import React from "react";

const PageNotFound = () => {
  return (
    <div className="h-[800px] page-container mb-20 overflow-hidden">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <div className="w-full h-full rounded-lg">
        <img
          src="https://cdn.dribbble.com/users/4841378/screenshots/13921868/media/cea5408c3416011ae98e7c16658664df.png?compress=1&resize=1200x900&vertical=top"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
