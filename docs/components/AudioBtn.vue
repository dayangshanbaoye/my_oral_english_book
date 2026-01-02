<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: String
})

const audioRef = ref(null)
const isPlaying = ref(false)

const togglePlay = () => {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const onEnded = () => {
  isPlaying.value = false
}
</script>

<template>
  <div class="audio-btn-container">
    <audio ref="audioRef" :src="src" @ended="onEnded" class="hidden-audio"></audio>
    <button @click="togglePlay" class="play-btn" :class="{ 'playing': isPlaying }">
      <span v-if="!isPlaying" class="icon">▶</span>
      <span v-else class="icon">⏸</span>
      <span class="text">{{ isPlaying ? 'Playing...' : 'Play Audio' }}</span>
    </button>
  </div>
</template>

<style scoped>
.hidden-audio {
  display: none;
}

.play-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 600;
}

.play-btn:hover {
  background-color: var(--vp-c-brand-1);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.play-btn.playing {
  background-color: var(--vp-c-brand-1);
  color: white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(var(--vp-c-brand-1), 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(var(--vp-c-brand-1), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--vp-c-brand-1), 0); }
}

.icon {
  font-size: 12px;
}
</style>

