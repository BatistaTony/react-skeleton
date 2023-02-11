import { ComponentType } from "react";
import "./../../../styles/styles.css";
export type WrappedProps = {
    isLoading: boolean;
    skeletonFirstColor?: string;
    skeletonSecondColor?: string;
};
declare const Skeleton: <T extends object>(WrappedComponent: ComponentType<T>) => (props: T & WrappedProps) => JSX.Element;
export default Skeleton;
