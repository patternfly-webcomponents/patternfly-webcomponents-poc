import classnames from 'classnames';
import { html, property, customElement } from 'lit-element';
import CustomElement from '../base/customElement';
import { pfPrefix } from '../../globals/settings';
import './page-test2.scss';

/**
 * Page Header Brand Link.
 */
@customElement(`${pfPrefix}-page-test2-header-brand-link`)
class PFPageHeaderBrandLinkTest2 extends CustomElement {
  /**
   * Additional button classes
   */
  @property({ reflect: false })
  class = '';

  createRenderRoot() {
    return this;
  }

  render() {
    const { class: additionalClass } = this;
    const classes = classnames(additionalClass, `${pfPrefix}-c-page__header-brand-link`);
    return html`
      <a class="${classes}"><slot></slot></a>
    `;
  }
}
export default PFPageHeaderBrandLinkTest2;
