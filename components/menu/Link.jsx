import styles from '@/styles/menu/link.module.scss';
import { motion } from 'framer-motion';
import { slide, scale } from './menuAnim';
import ScrumbleTestMenu from "@/components/Scrumble/SrumbleTestMenu";


export default function Index({ data, isActive, setSelectedIndicator }) {
    const { title, href, index } = data;

    return (
        <motion.div
            className={styles.link}
            onMouseEnter={() => setSelectedIndicator(href)}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                
                animate={isActive ? "open" : "closed"}
                className={styles.indicator}
            />

            {/* ✅ PLUS DE NextLink ICI */}
            <ScrumbleTestMenu
                text={title}
                href={href}
                className="pointer-events-auto"
            />
        </motion.div>
    );
}
