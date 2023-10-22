import tmi, {
	BanUserstate,
	ChatUserstate,
	DeleteUserstate,
	Options,
	SubGiftUserstate,
	SubMethods,
	SubMysteryGiftUserstate,
	SubUserstate,
} from 'tmi.js';

export const useTMI = (options: Options) => {
	const client = new tmi.Client(options);
	client.connect();

	const disconnect = () => {
		client.disconnect();
	};

	const onConnect = (callback: () => void) => {
		client.on('connected', callback);
	};

	const onMessage = (
		callback: (
			channel: string,
			userstate: ChatUserstate,
			message: string,
			self: boolean
		) => void
	) => {
		client.on('message', callback);
	};

	const onMessageDelete = (
		callback: (
			channel: string,
			username: string,
			deletedMessage: string,
			userstate: DeleteUserstate
		) => void
	) => {
		client.on('messagedeleted', callback);
	};

	const onBan = (
		callback: (
			channel: string,
			username: string,
			reason: string,
			userstate: BanUserstate
		) => void
	) => {
		client.on('ban', callback);
	};

	const onClearChat = (callback: (channel: string) => void) => {
		client.on('clearchat', callback);
	};

	const onCheer = (
		callback: (
			channel: string,
			userstate: ChatUserstate,
			message: string
		) => void
	) => {
		client.on('cheer', callback);
	};

	const onSubscription = (
		callback: (
			channel: string,
			username: string,
			method: SubMethods,
			message: string,
			userstate: SubUserstate
		) => void
	) => {
		client.on('subscription', callback);
	};

	const onSubscriptionGift = (
		callback: (
			channel: string,
			username: string,
			streakMonths: number,
			recipient: string,
			methods: SubMethods,
			userstate: SubGiftUserstate
		) => void
	) => {
		client.on('subgift', callback);
	};

	const onSubscriptionMisteryGift = (
		callback: (
			channel: string,
			username: string,
			numbOfSubs: number,
			methods: SubMethods,
			userstate: SubMysteryGiftUserstate
		) => void
	) => {
		client.on('submysterygift', callback);
	};

	return {
		disconnect,
		onConnect,
		onMessage,
		onMessageDelete,
		onBan,
		onClearChat,
		onCheer,
		onSubscription,
		onSubscriptionGift,
		onSubscriptionMisteryGift,
	};
};
