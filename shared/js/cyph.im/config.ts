module Cyph.im {
	/**
	 * Static/constant configuration values.
	 */
	export class Config {
		/** Number of seconds before new cyph wait screen will abort. */
		public static newCyphCountdown: number	= 600;

		/** Known good hashes of cyph.im's WebSign bootstrap. */
		public static webSignHashes	= {
			'2bc65ee1082f94261c9127ad765d4b670d24ca321222e638cf4409e325218828c5732f7c8e76d2f229ebdab6c95a30510cd2d73425699ef860d527a06c5e69ae':
				true,
			'85477981ccd7f019eb52a8bb8f9be2668cf4cd0e19ec6450b3d00916bad1d752eedb0e9488160aae4e90df129b109d56ac49c34795b9b4994f071f484028abf0':
				true,
			'0b12302d910309849d8c1ce8a931886d3b9536c81b5598cd27c176a7ce34123247f1faa484a62d42470d3a5dd7c7177a5bd0905ced9e3fe06d2aade97724fcd3':
				true,
			'5829995351b4900ae4a3426022c0c13844ad4e9f642f1e4b4b69f9ac4d265c40f8f369a2a2b99f1cb31f0aed944dbeefc297cff815f7db0e88733929be2794c8':
				true,
			'957a0b1ceb6014320764e0fdc3b6dca69266474dbb1bbb2080f6da90d2a0d85d79a92e71c8b6151137711806c2304d5857f39e0abfbacdac298e1095fd772539':
				true,
			'2f8acbd0eef6115a6ff52351e7c1325f98e447922ec43fefd9e14b4490b2b2679762693f9384795f55349ffabb3718a812c4d2ad9f16d470e70911cbb6c18b37':
				true,
			'561e07bbf7af1b767e7c28a8285b633637c68dac4b511ab1235f1bc777c883185d6db7742fed2b8f3df5ad6b205f4a8e14fd8b66bce88a0f564dabd7ed68b875':
				true,
			'9bbf9dce9a5adf6b2678c9dc8cd107eb1de04e96ecafeb743b9440c76c90f833cc2431840f3b504fc0ab46e0530cd2ed166aa522cd6e8a9768980b36d42c3edf':
				true,
			'4f11fcc1da5a683fc824489042a56274b43a8ef577175ab6d2d9cf21c195760e144d5bdcb0f4b8469f27d948729de147d3ba0b5b8a72bb71bb39720c3264c57f':
				true,
			'57f9b1c151616dce3a7994e1b8a9f00ffd6ec8ec5617e15b2c9326985fafbc4fd4f4cf8de9244908f04bdb4a5d5cb4423eaccadd53efadf86ee333f870feab3c':
				true,
			'463e8e44f91f004d73b36e592976a5c6981ab1c27aefcf2d640430fdd400ffb2194bfd62e668f292f91eac719fc16e58dfa0f1bb77b4d6353643104397a966af':
				true,
			'93ec036943aa16f9ece15a82b5ad439cd5a2cea478cd0cc910988937138b9778d0ae5e0bdea04b45865bfcc8a9ba25245b81fef3fbf5ca6dce62cad533db3e7a':
				true,
			'a4398b935eaf5059b2c26a93200742c4a8b0c7bad14b9b52dc367b5528a240f6e87260794a96fb749ad779e97930a0b47bf77f170b625438f1542b487814a14d':
				true,
			'21e4ee986877ca8413d951e2c33c41bb84cf489ea1aac09f7e923a24e650079ce338db17ea36372fd2ef627efacc1ce7fc3ad5447b06b0aaddd618713c3160bf':
				true,
			'c0289dcf3e9245c301db5d6865f38abbc76c13f1775f45ab69252a880b2f243a1a55948422ca6cd6ab4507ceb3bcd5cac6ef5f511cca1d2704ff6335b9c83cff':
				true,
			'901782da7129995150303a6530bb6669008ab0ae96525864ef27e5063f3a1787d15121144bf74d620c72a3837235185e97fb4854c0ccd5489f00dfd7df3475e6':
				true,
			'a085f6bbd774c776e266cc3047b2f682f6544c940a933bff855e172e517f9b07c8c162f611f75079f01762966087e04fecdd6826a5472c679e534004c7d3a938':
				true,
			'973f7d5a062eba26aef387d8ea5775e2121f8608a14c65513246e10039673d8843f848d257ffa62dac4a56922b6dadbcc81af6f2a42289d8c5d4dc10e8e8f45f':
				true,
			'8b3126fd5e16b764371100dcb191286a6cfba61c57b63c7342306f9b3c508eb5bb57ddf5d6127d3695c0cd7dfb71fbdb7b912a450debf2d958286476698b68ae':
				true,
			'bf053b8ae564b63ec2f53c499250ddf01d448a2801f74af8fb695fa0355f81bfe5e581c25ee4b42a05d1c570e43713d8de311cc14cd689a656e50addf6c3d7d4':
				true,
			'90757c05803a37554f8db9c770120530e1b176d35d19986420b361649d63a68f':
				true,
			'66d7979e06fd0577a5ed3b8100531e75970709c42665a305532a812f7fa069bf':
				true,
			'ff1ee2378de7d029124b0d3f5aeb4c2a7aa2bb52c0a7422dfe53b878c040c22b':
				true,
			'119c0e2bf3c95724be5bc0d49912d72abfba7f4357ded497876fbcfedb387932':
				true,
			'2d045383dea1fd33aecbdacf035dc4552c9c0489e777af83e00b493af72fc0f9':
				true,
			'd0c86b4344d710f657dc7118016cd530afa5f0f9b520719e03e478590cd43a88':
				true,
			'dd50c1147e7b742df939a42c13404e267f7c5c79c58daf7d7ee77b022c7120a8':
				true,
			'99f8075b3f363ef1b5e8bcc9cc15ea8b75cfc73ef482728a860748165bb35136':
				true,
			'fa4f474bd6d74210b14f6dc39045802fc2027bcabc54c0ca68cb751657d33490':
				true,
			'7b8aec8735d250089ed6d6c69615a6b30441decc5f99f465c3b524f016274663':
				true,
			'9118e74752563cd08641aa42e49db73b5b9e0ce1d505fc5b5b5930a6544ffbdd':
				true,
			'cc080a256288a9897c166763a77b0c8271355dd783ceb4b230d7078b0c4e4438':
				true
		};
	}
}
