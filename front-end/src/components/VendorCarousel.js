import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src: "https://picsum.photos/1200/400",
    altText: "Slide 1",
    caption: "",
  },
  {
    src: "https://picsum.photos/1200/400",
    altText: "Slide 2",
    caption: "",
  },
  {
    src: "https://picsum.photos/1200/400",
    altText: "Slide 3",
    caption: "",
  },
];

function VendorCarousel() {
  return (
    <>
      <center>
        <div
          style={{
            display: "block",
            width: 1200,
            padding: 30,
          }}
        >
          <UncontrolledCarousel items={carouselItems} />
        </div>
      </center>
    </>
  );
}

export default VendorCarousel;
