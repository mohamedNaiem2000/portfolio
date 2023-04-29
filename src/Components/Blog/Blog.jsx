import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Minblog from "../MinBlog/Minblog";

function Blog() {
  return (
    <>
      <div className="container">
        <Subtitle
          head={"Blog"}
          smallhead={"Our Blog"}
          pcontent={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          }
        />

        <div className="minimumBlog flex justify-evenly mt-20">
          <Minblog
            imgblog={"/images/image_1.jpg"}
            date={"JUNE 21, 2019"}
            Admin={"Admin"}
            head={"Why Lead Generation is Key for Business Growth"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia."
            }
          />

<Minblog
            imgblog={"/images/image_2.jpg"}
            date={"JUNE 21, 2019"}
            Admin={"Admin"}
            head={"Why Lead Generation is Key for Business Growth"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia."
            }
          />

<Minblog
            imgblog={"../../../public/images/image_3.jpg"}
            date={"JUNE 21, 2019"}
            Admin={"Admin"}
            head={"Why Lead Generation is Key for Business Growth"}
            content={
              "A small river named Duden flows by their place and supplies it with the necessary regelialia."
            }
          />
        </div>
      </div>
    </>
  );
}
export default Blog;
