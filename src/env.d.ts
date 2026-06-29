declare module 'katex/dist/contrib/auto-render.mjs' {
  const renderMathInElement: (element: Element | HTMLElement, options?: any) => void;
  export default renderMathInElement;
}