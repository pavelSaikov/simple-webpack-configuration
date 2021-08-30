export const createComponent = () => {
  const element = document.createElement("div");

  element.innerHTML = "Hello Webpack";

  return element;
};
