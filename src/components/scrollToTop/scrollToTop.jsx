import React from 'react';
import { useEffect, useState } from 'react';
import './scrollToTop.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

function ScrollToTop() {
    const [scrollToTop, setscrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setscrollToTop(true)
            } else {
                setscrollToTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="scrollToTop">
            {scrollToTop && (
                <FontAwesomeIcon
                    icon={faCircleArrowUp}
                    onClick={scrollUp}
                />
            )}
        </div>
    );
}

export default ScrollToTop;