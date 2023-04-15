import React from 'react';
import { Link } from 'react-router-dom';

export default function Herosection() {
  return (
    <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
            <h2>I'm <span>Ravi Kumar</span> a Professional Web & Graphice designer from India.</h2>
            <p>testing Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
            <Link to="/contact" className="btn-get-started">Available for hire</Link>
            </div>
        </div>
        </div>
    </section>
  )
}
