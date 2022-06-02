type FunctionalComponent = () => BasicElement;
type ElementType = "TEXT_ELEMENT" | FunctionalComponent | keyof HTMLElementTagNameMap;
type ElementProps = {
  nodeValue?: string;
  children?: BasicElement[];
};

export type BasicElement = {
  type: ElementType;
  props: ElementProps;
};

const isHTMLElementTagNameMap = (type: ElementType): type is keyof HTMLElementTagNameMap => {
  return type !== "TEXT_ELEMENT" && typeof type !== "function";
};

export const render = (element: BasicElement, container: HTMLElement | Text) => {
  if (typeof element.type === "function") element = element.type();
  const domEl =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(isHTMLElementTagNameMap(element.type) ? element.type : undefined);
  const isProperty = (key: string) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      domEl[name] = element.props[name];
    });
  element.props.children?.forEach((child) => render(child, domEl));
  // recursion!                                👆
  container.appendChild(domEl);
};

export const createTextElement = (text: string): BasicElement => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text
  }
});

export const createElement = (type: ElementType, props?: ElementProps, ...children: BasicElement[]): BasicElement => ({
  type,
  props: {
    ...props,
    children: children?.map((child) => (typeof child === "object" ? child : createTextElement(child)))
  }
});
