# Node-utils

**'uo-node-utils' is a bunch of tools for NodeJS**

**Feel free to contribute!**

```js
var Utils = require('uo-node-utils');

/* extend();
 * Extend Utils as you want.
 * You can also override methods
 * Support array as argument*/

Utils.extend({
	name: 'logger',
	content: function (str) {
		return console.log('[prefix] ' + str);
	}
});

Utils.extend([
	{
		name: 'logA',
		content: function () {
			console.log('__logA__');
			return 'logA';
		}
	},
	{
		name: 'logB',
		content: function () {
			console.log('__logB__');
			return 'logB';
		}
	}
]);

Utils.logA();
Utils.logB();



/* check.value();
 * check.fn();
 * Check typeof a value, or a returned value */

/* create.file();
 * Create a new file (even deep into a folder)

 * create.folder();
 * Create a folder
 * Support array as argument */

Utils.create.folder('my/new/folder');
Utils.create.file('my/new/folder/content.txt', 'Hello.');
Utils.create.file('other/folder/content.txt', 'You.');



/* each();
 * If no callback passed, return an array
 * Else, the callback will be executed for each file */

Utils.each('my/**/*');
// return [ 'my/new', 'my/new/folder', 'my/new/folder/content.txt' ];

Utils.each('my/**/*', function (path, i) {
	// console.log(path, i);
});



/* exist();
 * Test file or folder presence */

Utils.exist('my/');
// return true

Utils.exist('foo/');
// return false



/* read.file();
 * read.folder();
 * Read file and folder content(s) */

Utils.read.file('my/new/folder/content.txt');
// return 'Hello.'

Utils.read.folder('my/');
// return array



/* replaceInFile();
 * Replace content into a file */

Utils.replaceInFile('my/new/folder/content.txt', 'Hello.', 'H\nE\nL\nL\nO\n.');
// console.log( Utils.read.file('my/new/folder/content.txt') );



/* trim();
 * Trim a string or a file */

Utils.trim('H\nE\nL\nL\nO\n.');
// return HELLO.

Utils.trim('my/new/folder/content.txt');
// console.log( Utils.read.file('my/new/folder/content.txt') );



/* clear.file();
 * Remove content into a file

 * clear.folder();
 * Remove files into a folder
 * If folder doesn't exist, create it
 * Both support array as argument */

Utils.clear.file('my/new/folder/content.txt');
Utils.clear.folder('other');



/* del();
 * Remove any file and folders
 * Support array as argument */

Utils.del(['my', 'other']);

```
