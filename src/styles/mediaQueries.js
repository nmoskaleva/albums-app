export default {
  down(size) {
    const sizes = {
      xs: '576px',
      s: '768px',
      m: '992px',
      l: '1200px',
      xl: '1400px'
    };
    return `@media(max-width: ${sizes[size]})`;
  }
};
