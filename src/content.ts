import type { PlasmoContentScript } from "plasmo"

import Randomizer from "./randomizer"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"]
}

window.addEventListener("load", () => {
  const randomizer = new Randomizer()

  const [inputs, selects] = [
    document.getElementsByTagName("input"),
    document.getElementsByTagName("select")
  ]

  for (let field of inputs) {
    console.log("input => ", field.name)
    field.value = randomizer.lorem()
  }

  for (let select of selects) {
    console.log("select => ", select.name)
    select.value = randomizer.lorem()
  }
})
