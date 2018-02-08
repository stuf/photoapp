import { StyleSheet } from 'react-native';
import * as R from 'ramda';

//

export const seq = (x, ...fns) => R.pipe(...fns)(x);

export const tuple3 = R.slice(0, 3);
export const tuple4 = R.slice(0, 4);

export const curry2 = R.curryN(2);
export const curry3 = R.curryN(3);
export const curry4 = R.curryN(4);

export const joinComma = R.join(', ');

export const joinTuple3 = R.compose(joinComma, tuple3);
export const joinTuple4 = R.compose(joinComma, tuple4);

//. ## Stylesheet handling

export const flatten = (...xs) => StyleSheet.flatten(xs);

//

export const rgb = (...rgb) => `rgb(${joinTuple3(rgb)})`;
export const rgba = (...rgba) => `rgba(${joinTuple4(rgba)})`;
