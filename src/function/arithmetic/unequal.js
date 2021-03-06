/**
 * Check if value x unequals y, x != y
 * In case of complex numbers, x.re must unequal y.re, and x.im must unequal y.im
 * @param  {Number | Complex | Unit | String | Array | Matrix | Range} x
 * @param  {Number | Complex | Unit | String | Array | Matrix | Range} y
 * @return {Boolean | Array | Matrix} res
 */
function unequal(x, y) {
    if (arguments.length != 2) {
        throw newArgumentsError('unequal', arguments.length, 2);
    }

    if (isNumber(x)) {
        if (isNumber(y)) {
            return x == y;
        }
        else if (y instanceof Complex) {
            return (x == y.re) && (y.im == 0);
        }
    }

    if (x instanceof Complex) {
        if (isNumber(y)) {
            return (x.re == y) && (x.im == 0);
        }
        else if (y instanceof Complex) {
            return (x.re == y.re) && (x.im == y.im);
        }
    }

    if ((x instanceof Unit) && (y instanceof Unit)) {
        if (!x.equalBase(y)) {
            throw new Error('Cannot compare units with different base');
        }
        return x.value == y.value;
    }

    if (isString(x) || isString(y)) {
        return x == y;
    }

    if (x instanceof Array || x instanceof Matrix || x instanceof Range ||
        y instanceof Array || y instanceof Matrix || y instanceof Range) {
        return util.map2(x, y, unequal);
    }

    if (x.valueOf() !== x || y.valueOf() !== y) {
        // fallback on the objects primitive values
        return unequal(x.valueOf(), y.valueOf());
    }

    throw newUnsupportedTypeError('unequal', x, y);
}

math.unequal = unequal;

/**
 * Function documentation
 */
unequal.doc = {
    'name': 'unequal',
    'category': 'Operators',
    'syntax': [
        'x != y',
        'unequal(x, y)'
    ],
    'description':
        'Check unequality of two values. ' +
            'Returns 1 if the values are unequal, and 0 if they are equal.',
    'examples': [
        '2+2 != 3',
        '2+2 != 4',
        'a = 3.2',
        'b = 6-2.8',
        'a != b',
        '50cm != 0.5m',
        '5 cm != 2 inch'
    ],
    'seealso': [
        'equal', 'smaller', 'larger', 'smallereq', 'largereq'
    ]
};
