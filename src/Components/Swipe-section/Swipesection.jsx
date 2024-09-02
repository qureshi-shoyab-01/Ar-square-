import React, { useEffect } from 'react';
import './Swiper.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Swipesection = () => {
    useEffect(() => {
        let allowScroll = true;
        let scrollTimeout = gsap.delayedCall(1, () => allowScroll = true).pause();
        let currentIndex = 0;
        const swipePanels = gsap.utils.toArray(".swipe-section .panel");

        gsap.set(swipePanels, { zIndex: i => swipePanels.length - i });

        const intentObserver = ScrollTrigger.observe({
            type: "wheel,touch",
            onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
            onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
            tolerance: 10,
            preventDefault: true,
            onEnable(self) {
                allowScroll = false;
                scrollTimeout.restart(true);
                const savedScroll = self.scrollY();
                self._restoreScroll = () => self.scrollY(savedScroll);
                document.addEventListener("scroll", self._restoreScroll, { passive: false });
            },
            onDisable(self) {
                document.removeEventListener("scroll", self._restoreScroll);
            }
        });
        intentObserver.disable();

        function gotoPanel(index, isScrollingDown) {
            if (index < 0 || index >= swipePanels.length) {
                intentObserver.disable();
                return;
            }
            allowScroll = false;
            scrollTimeout.restart(true);

            const target = swipePanels[index];
            gsap.to(target, {
                yPercent: isScrollingDown ? -100 : 0,
                duration: 0.75
            });

            currentIndex = index;
        }

        ScrollTrigger.create({
            trigger: ".swipe-section",
            pin: true,
            start: "top top",
            end: "+=200",
            onEnter(self) {
                if (!intentObserver.isEnabled) {
                    self.scroll(self.start + 1);
                    intentObserver.enable();
                }
            },
            onEnterBack(self) {
                if (!intentObserver.isEnabled) {
                    self.scroll(self.end - 1);
                    intentObserver.enable();
                }
            }
        });

        return () => {
            intentObserver.kill(); // Cleanup observer on unmount
        };
    }, []);

    return (
        <div className="container-box">
            <div className="swipe-section">
                <section className="panel red">ScrollTrigger.observe() section</section>
                <section className="panel purple">SWIPE SECTION 2</section>
                <section className="panel blue">SWIPE SECTION 3</section>
                <section className="panel orange">Last swipe section... continue scrolling</section>
            </div>
        </div>
    );
};

export default Swipesection;
