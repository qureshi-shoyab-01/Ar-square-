import React, { useEffect, useRef, useState } from 'react';
import './number.css';

const Number_count = () => {
    const count1Ref = useRef(null);
    const count2Ref = useRef(null);
    const count3Ref = useRef(null);
    const count4Ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // Stop observing after it has been in view
                }
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (count1Ref.current) {
            observer.observe(count1Ref.current);
        }

        return () => {
            if (count1Ref.current) {
                observer.unobserve(count1Ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const counter = (ref, start, end, duration) => {
            let current = start;
            const range = end - start;
            const increment = end > start ? 1 : -1;
            const step = Math.abs(Math.floor(duration / range));
            const timer = setInterval(() => {
                current += increment;
                if (ref.current) {
                    ref.current.textContent = current;
                }
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
        };

        counter(count1Ref, 0, 400, 3000);
        counter(count2Ref, 100, 50, 3000);
        counter(count3Ref, 0, 40, 3000);
        counter(count4Ref, 0, 10, 3000);
    }, [isInView]);

    return (
        <>
            <section className="py-5 min-vh-10 Number-main">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className="box_of_numbers">
                                <span ref={count1Ref} className="display-4">0</span>
                                <small>+</small>
                                <p>Students Enrollment</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className='box_of_numbers'>
                                <span ref={count2Ref} className="display-4">0</span>
                                <small>+</small>
                                <p>Placements</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className='box_of_numbers'>
                                <span ref={count3Ref} className="display-4">0</span>
                                <small>+</small>
                                <p>Review</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className='box_of_numbers'>
                                <span ref={count4Ref} className="display-4">0</span>
                                <small>+</small>
                                <p> Year Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Number_count;
