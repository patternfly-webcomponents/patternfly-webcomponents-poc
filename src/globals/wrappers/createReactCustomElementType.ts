import React, { Component, createElement, forwardRef } from 'react';
// import on from 'carbon-components/es/globals/js/misc/on';

/**
 * A descriptor for a React event prop of a custom element.
 */
interface CustomElementEventDescriptor {
  /**
   * The event name.
   */
  name: string;

  /**
   * A boolean to detemine usage of capture mode or the event options.
   */
  options?: boolean | EventListenerOptions;
}

/**
 * A descriptor for a React prop for an attribute of a custom element.
 */
interface CustomElementPropDescriptor {
  /**
   * The attribute name for the prop.
   */
  attribute?: string;

  /**
   * The event name (or descriptor) for the prop.
   */
  event?: string | CustomElementEventDescriptor;

  /**
   * A function that takes a property value and returns the corresponding attribute value.
   */
  serialize?: (value: any) => string | void;
}

/**
 * A descriptor for a set of React props for attributes of a custom element.
 */
interface CustomElementPropsDescriptor {
  [propName: string]: CustomElementPropDescriptor;
}

/**
 * React props for the component `createCustomElementType()` generates.
 */
interface CustomElementTypeProps {
  /**
   * Ordinal prop.
   */
  [propName: string]: any;

  /**
   * Child nodes.
   */
  children?: React.ReactNode;
}

/**
 * @param refs List of React refs to merge.
 * @returns Merged React ref.
 */
const mergeRefs = <T>(...refs: React.Ref<T>[]) => el => {
  refs.forEach(ref => {
    // https://github.com/facebook/react/issues/13029#issuecomment-410002316
    if (typeof ref === 'function') {
      ref(el);
    } else if (Object(ref) === ref) {
      // `React.Ref.current` is read-only for regular use case, but we update it here
      (ref as { current: T }).current = el;
    }
  });
};

/**
 * @param prop A prop value.
 * @param descriptor A React prop descriptor.
 * @returns The corresponding attribute value for the given prop value.
 */
const convertProp = (prop: any, descriptor: CustomElementPropDescriptor) => {
  if (!descriptor) {
    return prop;
  }
  const { event, serialize } = descriptor;
  if (event) {
    // Events are not set as props, we use DOM `addEventListener()` instead
    return undefined;
  }
  return !serialize ? prop : serialize(prop);
};

/**
 * @param props A set of React props.
 * @param descriptor A set of React prop desciptor.
 * @returns The set of React props to set to a custom element, corresponding to the given React props.
 */
const convertProps = (props: CustomElementTypeProps, descriptor: CustomElementPropsDescriptor) =>
  Object.keys(props).reduce((acc, propName) => {
    const { [propName]: descriptorItem } = descriptor;
    const converted = convertProp(props[propName], descriptorItem);
    return typeof converted === 'undefined'
      ? acc
      : {
          ...acc,
          [(descriptorItem && descriptorItem.attribute) || propName]: converted,
        };
  }, {});

/**
 * Attaches listeners of custom events, to a custom element.
 * @param elem The custom element.
 * @param descriptor An object, keyed by prop name, of data that may have custom event names.
 * @param callback A callback function that runs as the custom events fire.
 * @returns A handle that allows to release all event listeners attached.
 */
/*
const attachEventListeners = (
  elem: HTMLElement,
  descriptor: CustomElementPropsDescriptor,
  callback: (name: string, event: Event) => void
): Handle => {
  const handles = new Set<Handle>();
  Object.keys(descriptor).forEach(propName => {
    if (descriptor[propName]) {
      const { event: eventDescriptor } = descriptor[propName];
      const name =
        Object(eventDescriptor) !== eventDescriptor
          ? (eventDescriptor as string)
          : (eventDescriptor as CustomElementEventDescriptor).name;
      const options =
        Object(eventDescriptor) !== eventDescriptor ? undefined : (eventDescriptor as CustomElementEventDescriptor).options;
      if (name) {
        handles.add(
          on(
            elem,
            name,
            event => {
              callback(propName, event);
            },
            options
          )
        );
      }
    }
  });
  return {
    release() {
      handles.forEach(handle => {
        handle.release();
        handles.delete(handle);
      });
      return null;
    },
  };
};
*/
/**
 * @param name The tag name of the custom element.
 * @param descriptor A descriptor for a set of React props for attributes of a custom element.
 * @returns A React component working as a wrapper for the given custom element.
 * @example
 * import { render } from 'react-dom';
 * import createCustomElementType, { booleanSerializer } from '/path/to/createCustomElementType';
 *
 * const BXDropdown = createCustomElementType('bx-dropdown', {
 *   disabled: {
 *     // Sets `disabled` attribute when the React prop value is truthy, unsets otherwise
 *     serialize: booleanSerializer,
 *   },
 *   helperText: {
 *     // Maps `helperText` React prop to `helper-text` attribute
 *     attribute: 'helper-text',
 *   },
 *   onBeforeSelect: {
 *     // Sets `onBeforeSelect` React prop value as a listener of `bx-dropdown-beingselected` custom event
 *     event: 'bx-dropdown-beingselected',
 *   },
 * });
 *
 * render(
 *   (
 *     <BXDropdown
 *       disabled={true}
 *       helperText="some-helper-text"
 *       onBeforeSelect={event => { console.log('bx-dropdown-beingselected is fired!', event); }}>
 *       <bx-dropdown-item value="all">Option 1</bx-dropdown-item>
 *       <bx-dropdown-item value="cloudFoundry">Option 2</bx-dropdown-item>
 *       <bx-dropdown-item value="staging">Option 3</bx-dropdown-item>
 *     </BXDropdown>
 *   )
 *   document.body
 * );
 */
const createReactCustomElementType = (name: string, descriptor: CustomElementPropsDescriptor) => {
  /**
   * A React component working as a wrapper for the custom element.
   */
  class CustomElementType extends Component<CustomElementTypeProps> {
    /**
     * The handle that allows to release all event listeners attached to this custom element.
     */
    private _eventListenersHandle: Handle | null = null;

    /**
     * The callback function that runs as the custom events fire.
     * @param propName The React prop name associated with the event listener.
     * @param event The event.
     */
    // private _handleEvent = (propName: string, event: Event) => {
    //   const { [propName]: listener } = this.props;
    //   if (listener) {
    //     listener.call(event.currentTarget, event);
    //   }
    // };

    /**
     * Handles getting/losing the React `ref` object of this custom element.
     * @param elem The custom element.
     */
    private _handleElemRef = (elem: HTMLElement) => {
      if (this._eventListenersHandle) {
        this._eventListenersHandle.release();
        this._eventListenersHandle = null;
      }
      if (elem) {
        // this._eventListenersHandle = attachEventListeners(elem, descriptor, this._handleEvent);
      }
    };

    render() {
      const { children, innerRef, ...props } = this.props;
      const mergedRef = mergeRefs<HTMLElement>(innerRef, this._handleElemRef);
      return createElement(name, { ref: mergedRef, ...convertProps(props, descriptor) }, children);
    }
  }

  return forwardRef<HTMLElement, CustomElementTypeProps>((props, ref) =>
    createElement(CustomElementType, { ...props, innerRef: ref })
  );
};

/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a boolean attribute in a custom element.
 */
export const booleanSerializer = value => (!value ? undefined : '');

/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a number attribute in a custom element.
 */
export const numberSerializer = value => String(value);

/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a object attribute in a custom element.
 */
export const objectSerializer = JSON.stringify;

export default createReactCustomElementType;
