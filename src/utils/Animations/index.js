    const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

    const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    };

    const fadeInDown = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { ...transition, duration: 1 },
    };

    const fadeInUp = {
    initial: { y: 150, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 150, opacity: 0 },
    transition: { ...transition, duration: 1 },
    };

    const fadeInLeft = {
    initial: { x: 120, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 120, opacity: 0, transition: { ...transition, delay: 0 } },
    transition: { ...transition, duration: 1 },
    };

    const scaleUp = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { ...transition },
    };

    // Stagger Animations

    // Se algum dia o stagger nao funcionar, olhar se ele nao esta chegando vazio e depois preenchendo
    // Se entre o elemento pai e filho houver alguma outra coisa, não irá funcionar

    const StaggerContainer = {
    show: {
        transition: {
        staggerChildren: 0.2,
        },
    },
    };

    const itemAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
        },
    },
    exit: { opacity: 0 },
    };

    const StaggerText = {
    animate: {
        y: 0,
        transition: {
        delayChildren: 1.2,
        staggerChildren: 0.04,
        staggerDirection: 1,
        },
    },
    };

    const letterAnimation = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { ...transition, type: "spring", duration: 1.5 },
    },
    };

    export {
    fadeIn,
    fadeInDown,
    fadeInUp,
    fadeInLeft,
    scaleUp,
    StaggerContainer,
    itemAnimation,
    StaggerText,
    letterAnimation,
    transition,
    };
