(function() {
    function injectFontAwesome() {
        if (document.getElementById("fa-css")) return;
        
        let link = document.createElement("link");
        link.id = "fa-css";
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
        document.head.appendChild(link);
    }

    function addOpenButton(video) {
        if (video.dataset.hasButton) return;
        video.dataset.hasButton = true;

        let btn = document.createElement("button");
        btn.innerHTML = '<i class="fa fa-external-link-alt"></i>'; 
        btn.style.position = "absolute";
        btn.style.top = "10px";
        btn.style.right = "10px";
        btn.style.background = "rgba(0, 0, 0, 0.6)";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.padding = "5px 10px";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "18px";
        btn.style.zIndex = "9999";

        btn.onclick = () => {
            const src = video.src || video.querySelector("source")?.src;
            if (src) {
                window.open(src, "_blank");
            } else {
                alert("No video source found.");
            }
        };

        video.style.position = "relative";  
        video.parentElement.appendChild(btn);
    }

    function scanForVideos() {
        document.querySelectorAll("video").forEach(addOpenButton);
    }

    injectFontAwesome();  
    scanForVideos();
    new MutationObserver(scanForVideos).observe(document.body, { childList: true, subtree: true });
})();
