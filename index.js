'use strict';
const got = require('got');

const link = username => {
	return `https://instagram.com/${username}`;
};

module.exports = username => {
	return got(link(username)).then(res => {
		return res.body.split(',"edge_followed_by":{"count":')[1].split('},"')[0];
	}).catch(error => {
		if (error) {
			return false;
		}
		return error.message;
	});
};
