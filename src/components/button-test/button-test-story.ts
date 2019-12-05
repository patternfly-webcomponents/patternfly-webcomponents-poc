import { html } from 'lit-html';
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { BUTTON_KIND } from './button-test';

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

storiesOf('Button-test', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { kind, disabled, onClick, additionalClasses } = createProps();
    return html`
      <style>
        <!-- Examples of overriding CSS in shadow DOM -- > body {
        }
        #cc_btn {
          --pf-global--FontSize--md: 5rem;
          --pf-global--FontWeight--semi-bold: 800;
          --pf-c-button--dd-danger--Color: yellow;
          --pf-c-button--dd-danger--hover--Color: blue;
          --pf-c-button--dd-danger--hover--BackgroundColor: purple;
          --pf-c-button--dd-danger--active--BackgroundColor: green;
          --pf-c-button--dd-danger--active--Color: green;
        }
      </style>
      <section class="pf-c-page__main-section" style="padding: 20px">
        <h1 class="pf-c-title pf-m-3xl">Button Variations</h1>
        <br />
        <pf-btn-test kind="primary" @click=${onClick}>
          Primary Button
        </pf-btn-test>
        <pf-btn-test kind="secondary" @click=${onClick}>
          Secondary Button
        </pf-btn-test>
        <pf-btn-test kind="tertiary" @click=${onClick}>
          Tertiary Button
        </pf-btn-test>
        <pf-btn-test kind="danger" @click=${onClick}>
          Danger Button
        </pf-btn-test>
        <pf-btn-test kind="danger" @click=${onClick} dd_btn>
          Danger Button
        </pf-btn-test>
        <pf-btn-test id="cc_btn" kind="danger" @click=${onClick}>
          Danger Button
        </pf-btn-test>
        <pf-btn-test kind="link" @click=${onClick}>
          <span class="pf-c-button__icon">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          Link Button
        </pf-btn-test>
        <pf-btn-test kind="plain" @click=${onClick} aria-label="Remove">
          <i class="fas fa-times" aria-hidden="true"></i>
        </pf-btn-test>
        <pf-btn-test kind="inline" class="pf-m-link" @click=${onClick}>
          Inline link button
        </pf-btn-test>
        <br />
        <br />
        <h1 class="pf-c-title pf-m-2xl">Knob Controlled Button</h1>
        <br />
        <pf-btn-test kind=${kind} ?disabled=${disabled} @click=${onClick} class=${additionalClasses}>
          Button
        </pf-btn-test>
        <br />
      </section>
    `;
  });
