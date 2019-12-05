import { html } from 'lit-html';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import './textinput';

const createProps = () => ({
  additionalClasses: text('Additional classes', ''),
});

storiesOf('TextInput (a11y)', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { additionalClasses } = createProps();
    return html`
      <section class="pf-c-page__main-section" style="padding: 20px">
        <h1 class="pf-c-title pf-m-3xl">A11y (VoiceOver) tests</h1>
        <br />
        <div class="pf-c-form-group">
          <label class="pf-c-form-label" for="firstName">
            <span>First Name</span>
          </label>
          <pf-textinput class=${additionalClasses} id="firstName" />
        </div>
        <br />
        <div class="pf-c-form-group">
          <label class="pf-c-form-label" for="lastName">
            <span>Last Name</span>
          </label>
          <input class="pf-c-form-control" id="lastName" type="text" />
        </div>
      </section>
    `;
  });
