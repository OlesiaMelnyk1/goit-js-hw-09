!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),r.removeAttribute("disabled"),t.style.backgroundColor=d(),intervalId=setInterval((function(){t.style.backgroundColor=d()}),1e3)})),r.addEventListener("click",(function(){e.removeAttribute("disabled"),r.setAttribute("disabled","disabled"),clearInterval(intervalId)}))}();
//# sourceMappingURL=01-color-switcher.7444fb49.js.map
