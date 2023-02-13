/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';

import {ReactCounter} from "./reactcounter"

export const Counter = qwikify$((props) => <ReactCounter {...props} />);