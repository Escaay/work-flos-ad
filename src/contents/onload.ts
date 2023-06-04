import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    // 网址不要打错，是www
  matches: ["https://workflos.ai/*"]
}

window.addEventListener("load", () => {
  console.log(
    '您好，我是workflows广告插件'
  )

  document.body.style.background = "pink"
})