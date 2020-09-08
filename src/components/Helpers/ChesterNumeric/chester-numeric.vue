<template>
  <input
    :placeholder="placeholder"
    @blur="onBlurHandler"
    @input="onInputHandler"
    @focus="onFocusHandler"
    ref="numeric"
    type="tel"
    v-model="amount"
    v-if="!readOnly"
  >
  <span
    v-else
    ref="readOnly"
    class="text-right"
  >{{ amount }}</span>
</template>

<script src="./chester-numeric.js"></script>