/**
 * Get the imaginary part of a complex number.
 * @param {Number | Complex | Array | Matrix | Range} x
 * @return {Number | Array | Matrix} im
 */
function im(x) {
    if (arguments.length != 1) {
        throw newArgumentsError('im', arguments.length, 1);
    }

    if (isNumber(x)) {
        return 0;
    }

    if (x instanceof Complex) {
        return x.im;
    }

    if (x instanceof Array || x instanceof Matrix || x instanceof Range) {
        return util.map(x, im);
    }

    if (x.valueOf() !== x) {
        // fallback on the objects primitive value
        return im(x.valueOf());
    }

    throw newUnsupportedTypeError('im', x);
}

math.im = im;

/**
 * Function documentation
 */
im.doc = {
    'name': 'im',
    'category': 'Complex',
    'syntax': [
        'im(x)'
    ],
    'description': 'Get the imaginary part of a complex number.',
    'examples': [
        'im(2 + 3i)',
        're(2 + 3i)',
        'im(-5.2i)',
        'im(2.4)'
    ],
    'seealso': [
        're',
        'conj',
        'abs',
        'arg'
    ]
};
