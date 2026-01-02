// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import AudioBtn from '../../components/AudioBtn.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('AudioBtn', AudioBtn)
  }
}

