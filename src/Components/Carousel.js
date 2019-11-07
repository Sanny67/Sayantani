import React from 'react';

class Carousel extends React.Component {

    render() {
        return (
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://c1.staticflickr.com/1/572/20607150556_c01d092437_b.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.proprofs.com/quiz-school/topic_images/p1cn9d01dks6j4631h4fs0hdoj3.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://c1.staticflickr.com/1/572/20607150556_c01d092437_b.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );

    }
}

export default Carousel;