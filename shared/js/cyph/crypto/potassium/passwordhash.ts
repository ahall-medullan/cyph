import {lib} from './lib';
import * as NativeCrypto from './nativecrypto';
import {SecretBox} from './secretbox';
import {util} from './util';


/** Equivalent to sodium.crypto_pwhash. */
export class PasswordHash {
	/** @ignore */
	private readonly helpers: {
		hash: (
			plaintext: Uint8Array,
			salt: Uint8Array,
			outputBytes: number,
			opsLimit: number,
			memLimit: number
		) => Promise<Uint8Array>;
	}	= {
		hash: async (
			plaintext: Uint8Array,
			salt: Uint8Array,
			outputBytes: number,
			opsLimit: number,
			memLimit: number
		) : Promise<Uint8Array> =>
			this.isNative ?
				NativeCrypto.passwordHash.hash(
					plaintext,
					salt,
					outputBytes,
					opsLimit,
					memLimit
				) :
				lib.sodium.crypto_pwhash_scryptsalsa208sha256(
					outputBytes,
					plaintext,
					salt,
					opsLimit,
					memLimit
				)
	};

	/** Algorithm name. */
	public readonly algorithm: string			=
		this.isNative ?
			(
				NativeCrypto.passwordHash.algorithm.name + '/' +
				NativeCrypto.passwordHash.algorithm.hash.name
			) :
			'scrypt'
	;

	/** Moderate mem limit. */
	public readonly memLimitInteractive: number	=
		this.isNative ?
			NativeCrypto.passwordHash.memLimitInteractive :
			lib.sodium.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE
	;

	/** Heavy mem limit. */
	public readonly memLimitSensitive: number	=
		this.isNative ?
			NativeCrypto.passwordHash.memLimitSensitive :
			134217728 /* 128 MB */
	;

	/** Moderate ops limit. */
	public readonly opsLimitInteractive: number	=
		this.isNative ?
			NativeCrypto.passwordHash.opsLimitInteractive :
			lib.sodium.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE
	;

	/** Heavy ops limit. */
	public readonly opsLimitSensitive: number	=
		this.isNative ?
			NativeCrypto.passwordHash.opsLimitSensitive :
			lib.sodium.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE
	;

	/** Salt length. */
	public readonly saltBytes: number			=
		this.isNative ?
			NativeCrypto.passwordHash.saltBytes :
			lib.sodium.crypto_pwhash_scryptsalsa208sha256_SALTBYTES
	;

	/** Hashes plaintext. */
	public async hash (
		plaintext: Uint8Array|string,
		salt: Uint8Array = util.randomBytes(
			this.saltBytes
		),
		outputBytes: number = this.secretBox.keyBytes,
		opsLimit: number = this.opsLimitInteractive,
		memLimit: number = this.memLimitInteractive,
		clearInput?: boolean
	) : Promise<{
		hash: Uint8Array;
		metadata: Uint8Array,
		metadataObject: {
			algorithm: string;
			memLimit: number;
			opsLimit: number;
			salt: Uint8Array;
		};
	}> {
		const plaintextBinary: Uint8Array	= util.fromString(plaintext);

		try {
			const algorithm: Uint8Array	= util.fromString(
				this.algorithm
			);

			const metadata: Uint8Array	= util.concatMemory(
				false,
				new Uint8Array(new Uint32Array([memLimit]).buffer),
				new Uint8Array(new Uint32Array([opsLimit]).buffer),
				new Uint8Array(new Uint32Array([salt.length]).buffer),
				salt,
				algorithm
			);

			return {
				hash: await this.helpers.hash(
					plaintextBinary,
					salt,
					outputBytes,
					opsLimit,
					memLimit
				),
				metadata,
				metadataObject: {
					algorithm: this.algorithm,
					memLimit,
					opsLimit,
					salt
				}
			};
		}
		finally {
			if (clearInput) {
				util.clearMemory(plaintextBinary);
				util.clearMemory(salt);
			}
			else if (typeof plaintext !== 'Uint8Array') {
				util.clearMemory(plaintextBinary);
			}
		}
	}

	/** Parses metadata byte array into usable object. */
	public async parseMetadata (metadata: Uint8Array) : Promise<{
		algorithm: string;
		memLimit: number;
		opsLimit: number;
		salt: Uint8Array;
	}> {
		metadata	= new Uint8Array(metadata);

		try {
			const saltBytes: number	= new Uint32Array(metadata.buffer, 2, 1)[0];

			return {
				algorithm: util.toString(new Uint8Array(metadata.buffer, 12 + saltBytes)),
				memLimit: new Uint32Array(metadata.buffer, 0, 1)[0],
				opsLimit: new Uint32Array(metadata.buffer, 1, 1)[0],
				salt: new Uint8Array(new Uint8Array(metadata.buffer, 12, saltBytes))
			};
		}
		finally {
			util.clearMemory(metadata);
		}
	}

	constructor (
		/** @ignore */
		private readonly isNative: boolean,

		/** @ignore */
		private readonly secretBox: SecretBox
	) {}
}