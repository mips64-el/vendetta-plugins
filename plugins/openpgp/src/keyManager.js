import { generateKey } from 'openpgp';

function generateKeyPair() {
    generateKey({
        curve: 'ed25519'
    });
}
