export const CartWrapperAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const CartAnimation = {
  initial: { x: "50%" },
  animate: { x: "0%" },
  transition: { type: "tween" },
  exit: { x: "50%" },
};

export const EmptyAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.2 },
};

export const ProductCardAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.3 },
};
