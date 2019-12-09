import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType';
import { BUTTON_KIND } from './button';

const PFBtn = createReactCustomElementType('pf-btn', {
  disabled: {
    serialize: booleanSerializer,
  },
  small: {
    serialize: booleanSerializer,
  },
});

const kinds = {
  [`Primary button (${BUTTON_KIND.PRIMARY})`]: BUTTON_KIND.PRIMARY,
  [`Secondary button (${BUTTON_KIND.SECONDARY})`]: BUTTON_KIND.SECONDARY,
  [`Danger button (${BUTTON_KIND.DANGER})`]: BUTTON_KIND.DANGER,
};

const createProps = () => ({
  kind: select('Button kind (kind)', kinds, BUTTON_KIND.PRIMARY),
  onClick: action('click'),
});

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { onClick } = createProps();
    createProps();

    return (
      <PFBtn kind={'primary'} onClick={onClick}>
        Primary Button
      </PFBtn>
    );
  });
