import React from "react";
import { ChatTypeBox, ChatTypeBoxProps } from "./ChatTypeBox";
import { ChatMessageItem } from "./ChatMessage";
import { ChatMessageList, OnLoadMore } from "./ChatMessageList";
import "./ChatMessages.less";

export interface ChatMessagesProps {
    userId: string;
    identity: ChatTypeBoxProps["identity"];
    messages: ChatMessageItem[];
    isRaiseHand: boolean;
    isBan: boolean;
    onMessageSend: (text: string) => Promise<void>;
    onLoadMore: OnLoadMore;
    onSwitchHandRaising: () => void;
    onBanChange: () => void;
}

export class ChatMessages extends React.PureComponent<ChatMessagesProps> {
    renderDefault(): React.ReactNode {
        return <div className="chat-messages-default">说点什么吧...</div>;
    }

    render(): React.ReactNode {
        const {
            identity,
            userId,
            messages,
            isRaiseHand,
            isBan,
            onMessageSend,
            onLoadMore,
            onSwitchHandRaising,
            onBanChange,
        } = this.props;

        return (
            <div className="chat-messages-wrap">
                <div className="chat-messages">
                    {messages.length > 0 ? (
                        <div className="chat-messages-box">
                            <ChatMessageList
                                userId={userId}
                                messages={messages}
                                onLoadMore={onLoadMore}
                            />
                        </div>
                    ) : (
                        this.renderDefault()
                    )}
                </div>
                <ChatTypeBox
                    identity={identity}
                    isBan={isBan}
                    isRaiseHand={isRaiseHand}
                    onBanChange={onBanChange}
                    onSend={onMessageSend}
                    onRaiseHandChange={onSwitchHandRaising}
                />
            </div>
        );
    }
}

export default ChatMessages;