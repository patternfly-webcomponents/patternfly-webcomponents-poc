import classnames from 'classnames';
import { html, property, customElement } from 'lit-element';
import CustomElement from '../base/customElement';
import { pfPrefix } from '../../globals/settings';
import styles from './page-test2.scss';

/**
 * Page.
 */
@customElement(`${pfPrefix}-page-test2`)
class PFPageTest2 extends CustomElement {
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
    const classes = classnames(additionalClass, `${pfPrefix}-c-page`);
    console.log('PFPageTest2');
    return html`
      <div name="test" class="${classes}"><slot></slot></div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}
export default PFPageTest2;