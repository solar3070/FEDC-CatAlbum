export default function ImageViewer({ $target, onClose }) {
  const $imageViewer = document.createElement("div");
  $imageViewer.className = "ImageViewer Modal";
  $target.appendChild($imageViewer);

  this.state = {
    selectedImageUrl: null,
  };

  this.setState = (nextStae) => {
    this.state = nextStae;
    this.render();
  };

  this.render = () => {
    $imageViewer.style.display = this.state.selectedImageUrl ? "block" : "none";

    $imageViewer.innerHTML = `
      <div class="content">
        <img src="${this.state.selectedImageUrl}" />
      </div>
      `;
  };

  this.render();

  window.addEventListener("keyup", (e) => {
    // 만약 누른 키가 esc인 경우 onClose 호출
    if (e.key === "Escape") {
      onClose();
    }
  });

  $imageViewer.addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("Modal")) {
      onClose();
    }
  });
}
