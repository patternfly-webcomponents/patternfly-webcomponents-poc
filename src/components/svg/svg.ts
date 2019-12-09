import classnames from 'classnames';
import { html, property, customElement, LitElement } from 'lit-element';
import { pfPrefix } from '../../globals/settings';
import styles from './svg.scss';

/**
 * Dropdown.
 */
@customElement(`${pfPrefix}-svg`)
class PFSvgInput extends LitElement {
  /**
   * Additional button classes
   */
  @property({ reflect: false })
  class = '';

  /**
   * ID
   */
  @property({ reflect: false })
  id = '';

  createRenderRoot() {
    return this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

  render() {
    const { class: additionalClass, id } = this;
    const classes = classnames(additionalClass, `${pfPrefix}-c-form-control`);
    return html`
      <input class="${classes}" id="${id}" type="text" />
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}
export default PFSvgInput;