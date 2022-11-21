export default function ImageViewer({ $target }) {
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
}
