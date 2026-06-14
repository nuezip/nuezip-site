<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="home-badge-row">
    <a
      href="https://apps.apple.com/app/id6771268165" target="_blank" rel="noopener noreferrer"
      class="store-badge-link"
      aria-label="Download PetReminder on the Mac App Store"
    >
      <img
        :src="withBase('/badges/Mac-App-Store.png')"
        alt="Download on the Mac App Store"
        class="store-badge"
        width="156"
        height="46"
      />
    </a>
  </div>
</template>
