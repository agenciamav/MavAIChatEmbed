type BotProps = {
    chatflowid: string;
    apiHost?: string;
    chatflowConfig?: Record<string, unknown>;
};
export declare const initFull: (props: BotProps & {
    id?: string;
}) => void;
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