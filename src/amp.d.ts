// declare namespace JSX {
//   interface IntrinsicElements {
//     [elemName: string]: any;
//   }
// }

declare namespace JSX {
  interface IntrinsicElements {
    "amp-accordion": React.ReactHTMLElement & {
      id?: string;
      animate?: boolean;
    };
    "amp-date-picker": ReactApp;
    "amp-img": ReactApp;
    "amp-sidebar": ReactApp;
    "amp-truncate-text": ReactApp;
    button: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & { on?: string; slot?: string };
    a: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > & { on?: string };
  }
}

// declare namespace JSX {
//   interface AmpImg {
//     alt?: string;
//     src?: string;
//     width?: string;
//     height?: string;
//     layout?: string;
//   }
//   interface IntrinsicElements {
//     "amp-img": AmpImg;
//   }
// }
