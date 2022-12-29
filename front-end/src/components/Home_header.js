import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

function Home_header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://picsum.photos/1200/1200")',
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Whendor</h1>
            <h3>Finding NYC Vendors Quickly and Cleanly</h3>
            <br />
            <Button className="btn-round" color="neutral" type="button" outline>
              Featured Vendor
            </Button>
            <br />
            <br />
            <Button
              className="btn-round"
              href="/About"
              color="neutral"
              type="button"
              outline
            >
              About Us
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home_header;
