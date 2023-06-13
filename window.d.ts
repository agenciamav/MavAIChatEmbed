type BotProps = {
    chatflowid: string;
    apiHost?: string;
};
export declare const init: (props: BotProps) => void;
type MavChat = {
    init: typeof init;
};
export declare const parseMavChat: () => {
    init: (props: BotProps) => void;
};
export declare const injectMavChatInWindow: (bot: MavChat) => void;
export {};
//# sourceMappingURL=window.d.ts.map