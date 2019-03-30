const component = () => {
  let element = document.createElement("div");
  element.innerHTML = `Hello TypeScript`;
  return element;
};

let user = "Alex";

document.body.appendChild(component());
