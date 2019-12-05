import { html } from 'lit-html';
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { BUTTON_KIND } from './button-test2';

const kinds = {
  [`Primary button (${BUTTON_KIND.PRIMARY})`]: BUTTON_KIND.PRIMARY,
  [`Secondary button (${BUTTON_KIND.SECONDARY})`]: BUTTON_KIND.SECONDARY,
  [`Tertiary button (${BUTTON_KIND.TERTIARY})`]: BUTTON_KIND.TERTIARY,
  [`Danger button (${BUTTON_KIND.DANGER})`]: BUTTON_KIND.DANGER,
  [`Link button (${BUTTON_KIND.LINK})`]: BUTTON_KIND.LINK,
  [`Plain button (${BUTTON_KIND.PLAIN})`]: BUTTON_KIND.PLAIN,
  [`Inline button (${BUTTON_KIND.INLINE})`]: BUTTON_KIND.INLINE,
};

const createProps = () => ({
  kind: select('Button kind (kind)', kinds, BUTTON_KIND.PRIMARY),
  disabled: boolean('Disabled (disabled)', false),
  onClick: action('click'),
  additionalClasses: text('Additional classes', ''),
});

storiesOf('Button-test2 (!shadow)', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { kind, disabled, onClick, additionalClasses } = createProps();
    return html`
      <section class="pf-c-page__main-section" style="padding: 20px">
        <h1 class="pf-c-title pf-m-3xl">Button Variations</h1>
        <br />
        <pf-btn-test2 kind="primary" @click=${onClick}>
          Primary Button
        </pf-btn-test2>
        <pf-btn-test2 kind="secondary" @click=${onClick}>
          Secondary Button
        </pf-btn-test2>
        <pf-btn-test2 kind="tertiary" @click=${onClick}>
          Tertiary Button
        </pf-btn-test2>
        <pf-btn-test2 kind="danger" @click=${onClick}>
          Danger Button
        </pf-btn-test2>
        <pf-btn-test2 kind="danger" @click=${onClick} dd_btn>
          Danger Button
        </pf-btn-test2>
        <pf-btn-test2 id="cc_btn" kind="danger" @click=${onClick}>
          Danger Button
        </pf-btn-test2>
        <pf-btn-test2 kind="link" @click=${onClick}>
          <span class="pf-c-button__icon">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          Link Button
        </pf-btn-test2>
        <pf-btn-test2 kind="plain" @click=${onClick} aria-label="Remove">
          <i class="fas fa-times" aria-hidden="true"></i>
        </pf-btn-test2>
        <pf-btn-test2 kind="inline" class="pf-m-link" @click=${onClick}>
          Inline link button
        </pf-btn-test2>
        <br />
        <br />
        <h1 class="pf-c-title pf-m-2xl">Knob Controlled Button</h1>
        <br />
        <pf-btn-test2 kind=${kind} ?disabled=${disabled} @click=${onClick} class=${additionalClasses}>
          Button
        </pf-btn-test2>
        <br />
      </section>
    `;
  });
