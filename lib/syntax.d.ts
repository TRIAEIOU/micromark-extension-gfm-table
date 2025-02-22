/**
 * Syntax extension for micromark (passed in `extensions`).
 *
 * @type {Extension}
 */
export const xtable: Extension;
export type Extension = import('micromark-util-types').Extension;
export type Resolver = import('micromark-util-types').Resolver;
export type Tokenizer = import('micromark-util-types').Tokenizer;
export type State = import('micromark-util-types').State;
export type Token = import('micromark-util-types').Token;
export type Align = 'left' | 'center' | 'right' | 'none';
