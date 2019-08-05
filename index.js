#!/usr/bin/env node

const EC = require('elliptic').ec;
const ec = new EC('curve25519');
const argv = require('optimist').argv;

if (argv._.length > 0) {
	const pkey = ec.keyFromPrivate(argv._[0].trim(), 'hex').getPublic().encode('hex');
	console.log(`Your public key is:\n${pkey}`);
	return;
}

const key = ec.genKeyPair();
const privKey = key.getPrivate().toString('hex');
const pubKey = key.getPublic().encode('hex');
console.log(`New private key (use private key in argv for extract public from private):\n${privKey}\n\nNew public key:\n${pubKey}`);
