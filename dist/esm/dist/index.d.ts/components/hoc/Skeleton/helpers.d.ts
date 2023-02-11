export interface addClassesProps {
    container: HTMLDivElement;
    skeletonFirstColor?: string;
    skeletonSecondColor?: string;
}
export declare const clearValues: <T>(data: T) => T;
export declare const addClasses: ({ container, skeletonFirstColor, skeletonSecondColor, }: addClassesProps) => void;
export declare const removeClasses: () => void;
