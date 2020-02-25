import { html } from 'lit-html';
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { BUTTON_KIND } from './button-test3';

// See .storybook/_container.scss
// import '@patternfly/patternfly/patternfly-base.css';
// import '@patternfly/patternfly/components/Button/button.css';

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

function handleClick(msg) {
  console.log(msg);
}

storiesOf('Button-test3 (event-in-comp)', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { kind, disabled, onClick, additionalClasses } = createProps();

    return html`
      <section class="pf-c-page__main-section" style="padding: 20px">
        <h1 class="pf-c-title pf-m-3xl">Button Variations</h1>
        <br />
        <pf-btn-test3 kind="primary" @click=${onClick}>
          Primary Button
        </pf-btn-test3>
        <pf-btn-test3 kind="secondary" @click=${onClick}>
          Secondary Button
        </pf-btn-test3>
        <pf-btn-test3 kind="secondary" .click=${() => handleClick('clicking')}>
          My Button
        </pf-btn-test3>
        <br />
        <br />
        <h1 class="pf-c-title pf-m-2xl">Knob Controlled Button</h1>
        <br />
        <pf-btn-test3 kind=${kind} ?disabled=${disabled} @click=${onClick} class=${additionalClasses}>Button 3</pf-btn-test3>
        <br />
      </section>
    `;
  });
