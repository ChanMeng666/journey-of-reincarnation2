'use client';

import { motion } from "framer-motion";

const loadingVariants = {
    start: {
        scale: 1,
    },
    end: {
        scale: 0.8,
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export function GeneratingAnimation() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-8 p-12"
        >
            <motion.div
                variants={loadingVariants}
                initial="start"
                animate="end"
                className="text-6xl"
            >
                🔮
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="space-y-2 text-center"
            >
                <div className="text-lg font-medium text-muted-foreground">
                    正在寻找你的来世...
                </div>

                <motion.div
                    className="flex gap-1 justify-center text-2xl"
                    variants={containerVariants}
                >
                    {[..."..."].map((dot, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.2,
                            }}
                        >
                            •
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}