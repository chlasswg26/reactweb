import React, { Component } from "react";
import TimelineList from "./TimelineList";

// img About
import img1 from "../assets/img/about/1.jpg";
import img2 from "../assets/img/about/2.jpg";
import img3 from "../assets/img/about/3.jpg";
import img4 from "../assets/img/about/4.jpg";

const times = [
  {
    style: "",
    image: img1,
    timeline: "2009-2011",
    title: "Our Humble Beginnings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  },
  {
    style: "timeline-inverted",
    image: img2,
    timeline: "March 2011",
    title: "An Agency is Born",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  },
  {
    style: "",
    image: img3,
    timeline: "December 2012",
    title: "Transition to Full Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  },
  {
    style: "timeline-inverted",
    image: img4,
    timeline: "July 2014",
    title: "Phase Two Expansion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
  }
];

class Timeline extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                {times.map((item, i) => {
                  return <TimelineList {...item} key={i} />;
                })}
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
