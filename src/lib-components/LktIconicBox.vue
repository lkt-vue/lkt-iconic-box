<script setup lang="ts">

import {computed, useSlots} from "vue";

const props = withDefaults(defineProps<{
    label?: string,
    labelTag?: string,
    subLabel?: string,
    subLabelTag?: string,
    extraLabel?: string,
    extraLabelTag?: string,
    icon?: string,
    imgSrc?: string,
}>(), {
    label: '',
    labelTag: 'p',
    subLabel: '',
    subLabelTag: 'p',
    extraLabel: '',
    extraLabelTag: 'p',
    icon: '',
    imgSrc: '',
});

const slots = useSlots();

const computedLabelTag = computed(() => {
        if (!props.labelTag) return 'p';
        return props.labelTag;
    }),
    computedSubLabelTag = computed(() => {
        if (!props.subLabelTag) return 'p';
        return props.subLabelTag;
    }),
    computedExtraLabelTag = computed(() => {
        if (!props.extraLabelTag) return 'p';
        return props.extraLabelTag;
    }),
    renderArtBox = computed(() => {
        if (props.icon !== '') return true;
        if (props.imgSrc !== '') return true;
        return false;
    });

</script>

<template>
    <div class="lkt-iconic-box-container">
        <div class="lkt-iconic-box">
            <div class="lkt-iconic-box-art" v-if="renderArtBox">
                <i v-if="icon" :class="icon" class="lkt-iconic-box-icon"/>
                <img v-if="imgSrc" :src="imgSrc" :alt="label" class="lkt-iconic-box-img"/>
            </div>
            <div class="lkt-iconic-box-content">
                <div v-if="label" class="lkt-iconic-box-label-container">
                    <component :is="computedLabelTag" class="lkt-iconic-box-label">
                        {{ label }}
                    </component>
                </div>
                <div v-if="subLabel" class="lkt-iconic-box-sub-label-container">
                    <component :is="computedSubLabelTag" class="lkt-iconic-box-sub-label">
                        {{ subLabel }}
                    </component>
                </div>
                <div v-if="extraLabel" class="lkt-iconic-box-extra-label-container">
                    <component :is="computedExtraLabelTag" class="lkt-iconic-box-extra-label">
                        {{ extraLabel }}
                    </component>
                </div>

                <div v-if="slots.default" class="lkt-iconic-box-extra">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>