import { motion, useInView, type UseInViewOptions, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "left" | "right" | "up" | "down" | "none";
    className?: string;
    viewport?: UseInViewOptions;
}

const ScrollReveal = ({
    children,
    width = "fit-content",
    delay = 0,
    direction = "up",
    className = "",
    viewport = { once: true, margin: "-50px" }
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const getVariants = (): Variants => {
        const distance = 50;
        let initialX = 0;
        let initialY = 0;

        switch (direction) {
            case "left": initialX = -distance; break;
            case "right": initialX = distance; break;
            case "up": initialY = distance; break;
            case "down": initialY = -distance; break;
            default: break;
        }

        return {
            hidden: { opacity: 0, x: initialX, y: initialY },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 0.8,
                    bounce: 0.3,
                    delay: delay
                }
            }
        };
    };

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
