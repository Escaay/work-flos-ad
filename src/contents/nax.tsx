import cssText from "data-text:~/contents/nav.less"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://workflos.ai/*"],
}
export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("#masthead > div > div.logo-wrapper > div.logo > a")
  export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    return style
  }
// // Use this to optimize unmount lookups
// export const getShadowHostId = () => "antd-nav"
export default ()=>{
    return (
    <div className="menu-container">
    <ul className="menu">
 	<li ><a href= "https://workflos.ai/">WorkFlos</a></li>
 	<li ><a href= "https://workflos.ai/appstore/category/58/AIGC">WorkFlos AIGC</a></li>
 	<li ><a href= "https://workflos.ai/blog">WorkFlos Blog</a></li>
 	</ul>
    </div>
    )
}
