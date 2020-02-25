import classnames from 'classnames';
import { html, property, customElement } from 'lit-element';
import CustomElement from '../base/customElement';
import { pfPrefix } from '../../globals/settings';

// See .storybook/_container.scss
// import '@patternfly/react-styles/css/components/Button/button';
// import '@patternfly/patternfly/components/Button/button.css';

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
@customElement(`${pfPrefix}-btn-test3`)
class PFButtonTest3 extends CustomElement {
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

  /* handle onClick event */
  @property({ type: Function })
  click;

  createRenderRoot() {
    // return this;
    return this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

  render() {
    const { click, disabled, kind, class: additionalClass } = this;
    const classes = classnames(additionalClass, `${pfPrefix}-c-button`, {
      [`${pfPrefix}-m-${kind}`]: kind,
    });
    return html`
      <button id="button" class="${classes}" ?disabled=${disabled} @click=${click}><slot></slot></button>
    `;
  }
}

export default PFButtonTest3;
