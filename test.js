import test from 'ava';
import f from '.';

test('Testing @tryhtml', async t => {
	const followers = await f('tryhtml');
	t.is(followers, followers);
	t.true(followers > 19000);
});
