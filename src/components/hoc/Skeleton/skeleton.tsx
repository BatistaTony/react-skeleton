import { ComponentType, useEffect, useRef } from "react";
import { addClasses, clearValues, removeClasses } from "./helpers";
import "./../../../styles/styles.css";

export type WrappedProps = {
  isLoading: boolean;
  skeletonFirstColor?: string;
  skeletonSecondColor?: string;
};

const Skeleton = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return function Hoc(props: T & WrappedProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { isLoading, skeletonFirstColor, skeletonSecondColor } = props;

    const defaultProps = clearValues(props);

    useEffect(() => {
      if (!isLoading) {
        removeClasses();
        return;
      } else {
        if (containerRef.current === null) return;
        addClasses({
          container: containerRef.current,
          skeletonFirstColor,
          skeletonSecondColor,
        });
      }
    }, [isLoading, skeletonFirstColor, skeletonSecondColor]);

    return isLoading ? (
      <>
        <div data-testid="skeleton" ref={containerRef}>
          <WrappedComponent {...defaultProps} />
        </div>
      </>
    ) : (
      <>
        <WrappedComponent {...(props as T)} />
      </>
    );
  };
};

export default Skeleton;
