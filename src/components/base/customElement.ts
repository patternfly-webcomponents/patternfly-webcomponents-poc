import { LitElement } from 'lit-element';

// See https://github.com/Polymer/lit-element/issues/42
class CustomElement extends LitElement {
  private observer: MutationObserver | undefined;

  connectedCallback() {
    super.connectedCallback();
    this.observer = new MutationObserver(mutations => {
      const slot = this.querySelector('slot');
      const _children: any[] = [];
      mutations.forEach(mutation => {
        mutation.removedNodes.forEach(node => {
          if (node.nodeType !== Node.COMMENT_NODE) {
            // this.appendChild(node);
            _children.push(node);
            if (slot) {
              slot.appendChild(node);
            }
          }
        });
      });
      if (slot) {
        const { parentNode } = slot;
        if (parentNode !== null) {
          _children.forEach(child => {
            parentNode.insertBefore(child, slot.nextSibling);
          });
          parentNode.removeChild(slot);
        }
      }
    });

    this.observer.observe(this, {
      childList: true,
    });
  }

  firstUpdate() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
export default CustomElement;
