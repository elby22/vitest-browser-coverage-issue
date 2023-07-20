import Util from './Util';
import { describe, test, expect } from 'vitest';

describe('Suite coverages', () => {
	describe('func1()', () => {
		test('func1', () => {
			const data = ['a', 'b'];
			const val = Util.func1(data);
			expect(val).toEqual(data)
		})
	});
	describe('func2()', () => {
		test('func2', () => {
			const data = ['c', 'd'];
			const val = Util.func2(data);
			expect(val).toEqual(data)
		})
	});
})

// This produces 100% coverage on browser and node

// test('func1', () => {
// 	const data = ['a', 'b'];
// 	const val = Util.func1(data);
// 	expect(val).toEqual(data)
// })

// test('func2', () => {
// 	const data = ['c', 'd'];
// 	const val = Util.func2(data);
// 	expect(val).toEqual(data)
// })