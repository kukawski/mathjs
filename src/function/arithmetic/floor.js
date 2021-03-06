/**
 * Round a value towards minus infinity, floor(x)
 * @param {Number | Complex | Array | Matrix | Range} x
 * @return {Number | Complex | Array | Matrix} res
 */
function floor(x) {
    if (arguments.length != 1) {
        throw newArgumentsError('floor', arguments.length, 1);
    }

    if (isNumber(x)) {
        return Math.floor(x);
    }

    if (x instanceof Complex) {
        return new Complex (
            Math.floor(x.re),
            Math.floor(x.im)
        );
    }

    if (x instanceof Array || x instanceof Matrix || x instanceof Range) {
        return util.map(x, floor);
    }

    if (x.valueOf() !== x) {
        // fallback on the objects primitive value
        return floor(x.valueOf());
    }

    throw newUnsupportedTypeError('floor', x);
}

math.floor = floor;

/**
 * Function documentation
 */
floor.doc = {
    'name': 'floor',
    'category': 'Arithmetic',
    'syntax': [
        'floor(x)'
    ],
    'description':
        'Round a value towards minus infinity.' +
            'If x is complex, both real and imaginary part are rounded ' +
            'towards minus infinity.',
    'examples': [
        'floor(3.2)',
        'floor(3.8)',
        'floor(-4.2)'
    ],
    'seealso': ['ceil', 'fix', 'round']
};
