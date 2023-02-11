const TEXT_SKELETON_CLASSES = "skeleton skeleton-text skeleton-text-body";
const TEXT_ID = "skeleton-text-example";
const TEXT_REPETITION = 3;

interface addClassesProps {
  container: HTMLDivElement;
  skeletonFirstColor?: string;
  skeletonSecondColor?: string;
}

export const clearValues = <T>(data: T): T => {
  //structuredClone is not working on when running test 🤔💭
  const newData = JSON.parse(JSON.stringify(data));

  for (const key in newData) {
    newData[key] = "";
  }

  return newData;
};

const addStylesBasedOnTheTag = (element: Element) => {
  const tag = element.localName;
  element.innerHTML = "";

  const simpleTags = {
    h1: () => {
      element.className = `skeleton-title  ${TEXT_SKELETON_CLASSES}`;
    },
    p: () => {
      if (element.classList.contains("skeleton")) return;
      const divElement = document.createElement("div");
      element.parentNode?.replaceChild(divElement, element);
      for (let i = 0; i < TEXT_REPETITION; i++) {
        const text = document.createElement("p");
        text.setAttribute("id", `${TEXT_ID}-${i}`);
        divElement.appendChild(text);
        text.innerHTML = "";
        text.className = TEXT_SKELETON_CLASSES;
      }
    },
  };

  const styleResult = simpleTags[tag as keyof typeof simpleTags];

  if (styleResult) {
    styleResult();
  } else {
    const htmlElement = element as HTMLElement;
    const elementWidth = htmlElement.style.width;
    const elementHeight = htmlElement.style.height;
    const elementRadius = htmlElement.style.borderRadius;

    const divElement = document.createElement("div");
    element.parentNode?.replaceChild(divElement, element);

    divElement.style.setProperty("width", `${elementWidth}`);
    divElement.style.setProperty("height", `${elementHeight}`);
    divElement.style.setProperty("border-radius", `${elementRadius}`);

    divElement.classList.add("skeleton");
  }
};

const checkStyleForNestedElements = (element: Element) => {
  const isNested = element.children.length > 0;

  if (isNested) {
    for (const singleElement of element.children) {
      checkStyleForNestedElements(singleElement);
    }
  } else {
    addStylesBasedOnTheTag(element);
  }
};

export const addClasses = ({
  container,
  skeletonFirstColor,
  skeletonSecondColor,
}: addClassesProps) => {
  if (!container) return;

  const textEl = document.createElement("p");

  textEl.className = `${textEl.className} ${TEXT_SKELETON_CLASSES}`;

  const root = document.documentElement;

  const color1 = skeletonFirstColor || "hsl(200, 20%, 80%)";
  const color2 = skeletonSecondColor || "hsl(200, 20%, 95%)";

  root.style.setProperty("--first-color", color1);
  root.style.setProperty("--second-color", color2);

  const children: HTMLCollection | undefined = container?.children;

  if (children.length === 0) return;

  for (const element of children) {
    checkStyleForNestedElements(element);
  }
};

export const removeClasses = () => {
  const element = document.querySelector(".skeleton");

  if (element) {
    element?.classList.remove("skeleton");
    const restClasses = TEXT_SKELETON_CLASSES.split(" ");

    restClasses.map((className) => {
      element?.classList.remove(className);
    });

    element?.classList.remove("skeleton-title");
  }
};
