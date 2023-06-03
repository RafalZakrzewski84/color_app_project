const sizes = {
  up() {},
  down(size) {
    const sizes = {
      xs: '600px',
      sm: '780px',
      md: '992px',
      lg: '1200px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
export default sizes;
