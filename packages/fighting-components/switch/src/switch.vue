<template>
  <div :class="['f-switch', { 'f-switch-disabled': disabled }]">
    <span
      v-if="closeText"
      :class="['f-switch-right-text', { 'f-switch-text-active': !modelValue }]"
    >
      {{ closeText }}
    </span>

    <div
      :class="FSwitchClass"
      :style="{ background: modelValue ? openColor : closeColor }"
      @click="changeSwitch"
    >
      <span class="f-switch-roll" :style="rollStyle">
        <i v-if="icon" :class="['f-icon', icon]" />
      </span>
    </div>

    <span
      v-if="openText"
      :class="['f-switch-left-text', { 'f-switch-text-active': modelValue }]"
    >
      {{ openText }}
    </span>
  </div>
</template>

<script lang="ts" setup name="FSwitch">
  import { computed } from 'vue'
  import { Props, Emits } from './switch'
  import type { changeSwitchInterface, rollStyleReturn } from './interface'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const changeSwitch: changeSwitchInterface = (): void => {
    if (prop.disabled) {
      return
    }
    emit('update:modelValue', !prop.modelValue)
    emit('change', !prop.modelValue)
  }

  const rollStyle: ComputedRef<rollStyleReturn> = computed(
    (): rollStyleReturn => {
      const { modelValue, closeColor, openColor, size } = prop
      const _size = {
        large: '24px',
        middle: '20px',
        small: '16px'
      } as const
      return {
        right: modelValue ? '0px' : _size[size],
        borderColor: modelValue ? openColor : closeColor
      }
    }
  )

  const FSwitchClass: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { size, modelValue, square } = prop

      return [
        'f-switch-input',
        {
          [`f-switch-${size}`]: size,
          'f-switch-close': !modelValue,
          'f-switch-square': square
        }
      ]
    }
  )
</script>
