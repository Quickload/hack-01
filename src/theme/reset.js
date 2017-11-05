export default (theme) => `
  /* http://meyerweb.com/eric/tools/css/reset/
  * v2.0 | 20110126
  * License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  input, textarea, select, button,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    letter-spacing: 0;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1.455555;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* This is to turn off default spinners on number inputs */
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  /* normalize */
  * {
    box-sizing: border-box;
    --webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html {
    height: 100%;
  }

  a {
    &,
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      cursor: pointer;
    }
  }

  /* A better looking default horizontal rule */
  hr {
    display: block;
    height: 1px;
    padding: 0;
    margin: ${theme.spacing.small}px 0;
    border: 0;
    border-top: 1px solid ${theme.colors.muted};
  }

  /* Remove the gap between audio, canvas, iframes,
  * images, videos and the bottom of their containers:
  * https://github.com/h5bp/html5-boilerplate/issues/440
  */
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  input[type='file'] {
    display: none;
  }

  ::-moz-selection {
    color: ${theme.colors.light};
    background: ${theme.colors.info.light};
    text-shadow: none;
  }

  ::selection {
    color: ${theme.colors.light};
    background: ${theme.colors.info.light};
    text-shadow: none;
  }

  button,
  input,
  textarea,
  select {
    &:focus {
      outline: none;
    }
  }

  b, strong {
    font-weight: 700;
  }

  small {
    font-size: 80%;
  }

  /* Typography
  * <sub />, <sup /> (https://gist.github.com/unruthless/413930)
  */
  sub,
  sup {
    /* Specified in % so that the sup/sup is the
      right size relative to the surrounding text */
    font-size: 75%;

    /* Zero out the line-height so that it doesn't
      interfere with the positioning that follows */
    line-height: 0;

    /* Where the magic happens: makes all browsers position
      the sup/sup properly, relative to the surrounding text */
    position: relative;

    /* Note that if you're using Eric Meyer's reset.css, this
      is already set and you can remove this rule */
    vertical-align: baseline;
  }

  sup {
    /* Move the superscripted text up */
    top: -0.5em;
  }

  sub {
    /* Move the subscripted text down, but only
      half as far down as the superscript moved up */
    bottom: -0.25em;
  }

  /****************************
   *    Roboto Google Font    *
   ***************************/

  @import url('https://fonts.googleapis.com/css?family=Roboto');
`;
