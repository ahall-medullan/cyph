/// <reference path="elements.ts" />
/// <reference path="../analytics.ts" />
/// <reference path="../env.ts" />
/// <reference path="../icontroller.ts" />
/// <reference path="../util.ts" />
/// <reference path="../../global/base.ts" />
/// <reference path="../../../lib/typings/jquery/jquery.d.ts" />


module Cyph {
	export module UI {
		export class SignupForm {
			private state: number	= 0;

			private data	= {
				Comment: <string> '',
				Email: <string> '',
				Language: <string> Env.language,
				Name: <string> ''
			};

			private controller: IController;

			public submit () : void {
				++this.state;
				this.controller.update();

				if (this.state === 2) {
					setTimeout(() => {
						++this.state;
						this.controller.update();
					}, 1500);
				}

				setTimeout(() => {
					let $input: JQuery	= Elements.signupForm.find('input:visible');

					if ($input.length === 1) {
						$input.focus();
					}
				}, 100);


				Util.retryUntilComplete(retry =>
					Util.request({
						method: 'PUT',
						url: Env.baseUrl + 'betasignups',
						data: this.data,
						error: retry,
						success: (isNew: string) => {
							if (isNew === 'true') {
								Analytics.main.send({
									hitType: 'event',
									eventCategory: 'signup',
									eventAction: 'new',
									eventValue: 1
								});
							}
						}
					})
				);
			}

			public constructor (controller: IController) {
				this.controller	= controller;

				setTimeout(() =>
					Elements.signupForm.addClass('visible')
				, 500);
			}
		}
	}
}
