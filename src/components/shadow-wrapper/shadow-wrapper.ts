import { html, customElement, LitElement } from 'lit-element';
import { pfPrefix } from '../../globals/settings';

/**
 * Shadow dom wrapper
 */
@customElement(`${pfPrefix}-shadow-wrapper`)
class PFShadowWrapper extends LitElement {
  createRenderRoot() {
    return this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
export default PFShadowWrapper;
