import sharedConfig from 'tailwind-config/tailwind.config';

export default {
  presets: [sharedConfig],
};

// eslint-disable-next-line no-undef
// TODO: ver si puedo reemplazar esto por un import
export const plugins = [require('tailwindcss-animate')];
