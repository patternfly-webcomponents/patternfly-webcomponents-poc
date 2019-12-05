import '@patternfly/react-styles/css/components/Button/button';
import classnames from 'classnames';
import { html, property, customElement } from 'lit-element';
import CustomElement from '../base/customElement';
import { pfPrefix } from '../../globals/settings';
// import styles from './button-test2.scss';

/**
 * Button kinds.
 */
export enum BUTTON_KIND {
  /**
   * Primary button.
   */
  PRIMARY = 'primary',

  /**
   * Secondary button.
   */
  SECONDARY = 'secondary',

  /**
   * Tertiary button.
   */
  TERTIARY = 'tertiary',

  /**
   * Danger button.
   */
  DANGER = 'danger',

  /**
   * Link button.
   */
  LINK = 'link',

  /**
   * Link button.
   */
  PLAIN = 'plain',

  /**
   * Link button.
   */
  INLINE = 'inline',
}

/**
 * Button.
 */
@customElement(`${pfPrefix}-btn-test2`)
class PFButtonTest2 extends CustomElement {
  /**
   * `true` if the button should be disabled. Corresponds to the attribute with the same name.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Button kind. Corresponds to the attribute with the same name.
   */
  @property({ reflect: true })
  kind = BUTTON_KIND.PRIMARY;

  /**
   * Additional button classes
   */
  @property({ reflect: false })
  class = '';

  createRenderRoot() {
    return this;
  }

  render() {
    const { disabled, kind, class: additionalClass } = this;
    const classes = classnames(additionalClass, `${pfPrefix}-c-button`, {
      [`${pfPrefix}-m-${kind}`]: kind,
    });
    return html`
      <link rel="stylesheet" href="@patternfly/patternfly/components/Button/button.css" />
      <button id="button" class="${classes}" ?disabled=${disabled}><slot></slot></button>
    `;
  }
}

export default PFButtonTest2;
