/**
 * Compute the argument of a complex value.
 * If x = a+bi, the argument is computed as atan2(b, a).
 * @param {Number | Complex | Array | Matrix | Range} x
 * @return {Number | Array | Matrix} res
 */
function arg(x) {
    if (arguments.length != 1) {
        throw newArgumentsError('arg', arguments.length, 1);
    }

    if (isNumber(x)) {
        return Math.atan2(0, x);
    }

    if (x instanceof Complex) {
        return Math.atan2(x.im, x.re);
    }

    if (x instanceof Array || x instanceof Matrix || x instanceof Range) {
        return util.map(x, arg);
    }

    if (x.valueOf() !== x) {
        // fallback on the objects primitive value
        return arg(x.valueOf());
    }

    throw newUnsupportedTypeError('arg', x);
}

math.arg = arg;

/**
 * Function documentation
 */
arg.doc = {
    'name': 'arg',
    'category': 'Complex',
    'syntax': [
        'arg(x)'
    ],
    'description':
        'Compute the argument of a complex value. ' +
            'If x = a+bi, the argument is computed as atan2(b, a).',
    'examples': [
        'arg(2 + 2i)',
        'atan2(3, 2)',
        'arg(2 - 3i)'
    ],
    'seealso': [
        're',
        'im',
        'conj',
        'abs'
    ]
};
