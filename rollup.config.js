import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'bundle/prosemirror-bundle.js',
        format: 'iife',
        name: 'proseMirrorBundle'
    },
    {
        file: 'bundle/prosemirror-bundle.min.js',
        format: 'iife',
        plugins: [terser()],
        name: 'proseMirrorBundle'
    }],
    plugins: [require('@rollup/plugin-typescript')(), nodeResolve()]
};