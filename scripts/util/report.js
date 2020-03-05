/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

const {green, red} = require('chalk');

function abort(...msgs) {
	console.error('');
	console.error(red('❌', msgs.join('\n')));
	console.error('');

	process.exit(1);
}

function success(...msgs) {
	console.log(green('✔️', msgs.join('\n')));
}

module.exports = {
	abort,
	success,
};
