import classnames from 'classnames';
import { html, property, customElement } from 'lit-element';
import CustomElement from '../base/customElement';
import { pfPrefix } from '../../globals/settings';
import './page-test2.scss';

/**
 * Page Header.
 */
@customElement(`${pfPrefix}-page-test2-header`)
class PFPageHeaderTest2 extends CustomElement {
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
    const classes = classnames(additionalClass, `${pfPrefix}-c-page__header`);
    return html`
      <header role="banner" class="${classes}"><slot></slot></header>
    `;
  }
}
export default PFPageHeaderTest2;
