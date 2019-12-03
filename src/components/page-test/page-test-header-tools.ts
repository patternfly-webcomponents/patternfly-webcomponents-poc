import classnames from 'classnames';
import { html, property, customElement, LitElement } from 'lit-element';
import { pfPrefix } from '../../globals/settings';
import styles from './page-test.scss';

/**
 * Page Header Tools.
 */
@customElement(`${pfPrefix}-page-test-header-tools`)
class PFPageHeaderToolsTest extends LitElement {
  /**
   * Additional button classes
   */
  @property({ reflect: false })
  class = '';

  createRenderRoot() {
    return this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

  render() {
    const { class: additionalClass } = this;
    const classes = classnames(additionalClass, `${pfPrefix}-c-page__header-tools`);
    return html`
      <div class="${classes}"><slot></slot></div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}
export default PFPageHeaderToolsTest;
