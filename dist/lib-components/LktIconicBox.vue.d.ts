declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string | undefined;
    labelTag?: string | undefined;
    labelContainerTag?: string | undefined;
    subLabel?: string | undefined;
    subLabelTag?: string | undefined;
    extraLabel?: string | undefined;
    extraLabelTag?: string | undefined;
    icon?: string | undefined;
    imgSrc?: string | undefined;
}>, {
    label: string;
    labelTag: string;
    labelContainerTag: string;
    subLabel: string;
    subLabelTag: string;
    extraLabel: string;
    extraLabelTag: string;
    icon: string;
    imgSrc: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string | undefined;
    labelTag?: string | undefined;
    labelContainerTag?: string | undefined;
    subLabel?: string | undefined;
    subLabelTag?: string | undefined;
    extraLabel?: string | undefined;
    extraLabelTag?: string | undefined;
    icon?: string | undefined;
    imgSrc?: string | undefined;
}>, {
    label: string;
    labelTag: string;
    labelContainerTag: string;
    subLabel: string;
    subLabelTag: string;
    extraLabel: string;
    extraLabelTag: string;
    icon: string;
    imgSrc: string;
}>>>, {
    label: string;
    icon: string;
    labelTag: string;
    labelContainerTag: string;
    subLabel: string;
    subLabelTag: string;
    extraLabel: string;
    extraLabelTag: string;
    imgSrc: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
