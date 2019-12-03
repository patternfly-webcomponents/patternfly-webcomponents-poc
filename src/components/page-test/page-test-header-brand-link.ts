import classnames from 'classnames';
import { html, property, customElement, LitElement } from 'lit-element';
import { pfPrefix } from '../../globals/settings';
import styles from './page-test-header-brand-link.scss';

/**
 * Page Header Brand Link.
 */
@customElement(`${pfPrefix}-page-test-header-brand-link`)
class PFPageHeaderBrandLinkTest extends LitElement {
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
    const classes = classnames(additionalClass, `${pfPrefix}-c-page__header-brand-link`);
    return html`
      <a class="${classes}"><slot></slot></a>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}
export default PFPageHeaderBrandLinkTest;
