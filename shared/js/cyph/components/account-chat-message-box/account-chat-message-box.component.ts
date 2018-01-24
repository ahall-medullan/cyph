import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../account/user';
import {ChatMessageValueTypes} from '../../proto';
import {AccountService} from '../../services/account.service';
import {EnvService} from '../../services/env.service';
import {StringsService} from '../../services/strings.service';
import {calendarInviteReasons} from '../../verticals/telehealth/calendar-invite-reasons';


/**
 * Angular component for account chat message box UI.
 */
@Component({
	selector: 'cyph-account-chat-message-box',
	styleUrls: ['./account-chat-message-box.component.scss'],
	templateUrl: './account-chat-message-box.component.html'
})
export class AccountChatMessageBoxComponent {
	/** @see ChatMessageBoxComponent.calendarInviteReasons */
	@Input() public calendarInviteReasons?: string[]	=
		this.envService.isTelehealth ?
			calendarInviteReasons :
			undefined
	;

	/** @see ChatMessageValueTypes */
	public readonly chatMessageValueTypes: typeof ChatMessageValueTypes	= ChatMessageValueTypes;

	/** @see ChatMessageBoxComponent.customSendFunction */
	@Input() public customSendFunction?: () => Promise<void>;

	/** @see ChatMessageBoxComponent.fileAccept */
	@Input() public fileAccept?: string;

	/** @see ChatMessageBoxComponent.messageType */
	@Input() public messageType: ChatMessageValueTypes	= ChatMessageValueTypes.Text;

	/** Message recipient to display in header. */
	@Input() public recipient?: Observable<User|undefined>;

	/** @see ChatMessageBoxComponent.send */
	public send?: () => Promise<void>;

	/** Shows header. */
	@Input() public showHeader: boolean			= false;

	/** @see ChatMessageBoxComponent.showUnreadCount */
	@Input() public showUnreadCount: boolean	= true;

	/** Submits form. */
	public async submit () : Promise<void> {
		if (this.send) {
			return this.send();
		}
	}

	constructor (
		/** @ignore */
		private readonly envService: EnvService,

		/** @see AccountService */
		public readonly accountService: AccountService,

		/** @see StringsService */
		public readonly stringsService: StringsService
	) {}
}