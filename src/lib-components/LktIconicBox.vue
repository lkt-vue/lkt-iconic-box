<script setup lang="ts">

import {computed, useSlots} from "vue";

const props = withDefaults(defineProps<{
    label?: string,
    labelTag?: string,
    icon?: string,
    imgSrc?: string,
}>(), {
    label: '',
    labelTag: 'p',
    icon: '',
    imgSrc: '',
});

const slots = useSlots();

const computedLabelTag = computed(() => {
        if (!props.labelTag) return 'p';
        return props.labelTag;
    }),
    renderArtBox = computed(() => {
        if (props.icon !== '') return true;
        if (props.imgSrc !== '') return true;
        return false;
    });

</script>

<template>
    <div class="lkt-iconic-box">
        <div class="lkt-iconic-box-art" v-if="renderArtBox">
            <i v-if="icon" :class="icon" class="lkt-iconic-box-icon"/>
            <img v-if="imgSrc" :src="imgSrc" :alt="label" class="lkt-iconic-box-img"/>
        </div>
        <div class="lkt-iconic-box-content">
            <component :is="computedLabelTag" class="lkt-iconic-box-label">
                {{ label }}
            </component>

            <div v-if="slots.default" class="lkt-iconic-box-extra">
                <slot/>
            </div>
        </div>
    </div>
</template>