export const PI = 3.141592;
    
export const _sqrt = (s, x, last) =>(x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x);

export const sqrt = s => _sqrt(s, s/2.0, 0.0);

export const square = x => x * x;

export default {
	PI: PI,
	sqrt: sqrt,
	square: square
};