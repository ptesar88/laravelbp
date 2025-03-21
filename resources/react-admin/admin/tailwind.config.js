import daisyui from 'daisyui';

export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {},
};
export const plugins = [daisyui];

export default {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}