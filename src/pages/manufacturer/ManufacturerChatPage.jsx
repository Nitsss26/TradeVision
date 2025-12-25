import React, { useState } from 'react';
import { Search, Send, MoreVertical, Paperclip, Smile, Check, CheckCheck, Clock } from 'lucide-react';
import ManufacturerLayout from '../../layouts/ManufacturerLayout';

const ManufacturerChatPage = () => {
    const [activeChat, setActiveChat] = useState(0);
    const [messageInput, setMessageInput] = useState('');

    // Mock Conversations Data
    const conversations = [
        {
            id: 0,
            user: "Rahul Kumar",
            company: "Global Traders",
            avatar: "RK",
            status: "online",
            lastMessage: "Is the price negotiable for bulk orders?",
            time: "10:30 AM",
            unread: 2,
            messages: [
                { id: 1, sender: 'them', text: "Hi, I'm interested in the Industrial Pump X200.", time: "10:28 AM" },
                { id: 2, sender: 'me', text: "Hello Rahul! Yes, it's one of our best sellers. How many units are you looking for?", time: "10:29 AM", status: 'read' },
                { id: 3, sender: 'them', text: "We need around 50 units for a project. Is the price negotiable for bulk orders?", time: "10:30 AM" }
            ]
        },
        {
            id: 1,
            user: "Sarah Jenkins",
            company: "Tech Import LLC",
            avatar: "SJ",
            status: "offline",
            lastMessage: "Thanks for the swift delivery!",
            time: "Yesterday",
            unread: 0,
            messages: [
                { id: 1, sender: 'me', text: "Your order #8821 has been shipped via DHL.", time: "Yesterday 9:00 AM", status: 'read' },
                { id: 2, sender: 'them', text: "Thanks for the swift delivery! Will let you know once received.", time: "Yesterday 2:15 PM" }
            ]
        },
        {
            id: 2,
            user: "Amit Singh",
            company: "Singh Bros Pvt Ltd",
            avatar: "AS",
            status: "online",
            lastMessage: "Can you share the catalog?",
            time: "Mon",
            unread: 0,
            messages: [
                { id: 1, sender: 'them', text: "Hi, do you have more variety in textiles?", time: "Mon 11:00 AM" },
                { id: 2, sender: 'them', text: "Can you share the catalog?", time: "Mon 11:01 AM" }
            ]
        }
    ];

    const currentConversation = conversations.find(c => c.id === activeChat);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim()) return;
        // In a real app, dispatch sending message here
        console.log("Sending:", messageInput);
        setMessageInput('');
    };

    return (
        <ManufacturerLayout>
            <div className="h-[calc(100vh-7rem)] max-w-[1600px] mx-auto bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex">

                {/* LEFT SIDEBAR: Conversations List */}
                <div className="w-80 border-r border-zinc-800 flex flex-col bg-zinc-900">
                    <div className="p-4 border-b border-zinc-800">
                        <h2 className="text-lg font-bold text-white mb-4">Messages</h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full pl-9 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {conversations.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => setActiveChat(chat.id)}
                                className={`p-4 flex gap-3 cursor-pointer transition-colors border-b border-zinc-800/50 hover:bg-zinc-800/50 ${activeChat === chat.id ? 'bg-blue-500/10 border-r-2 border-r-blue-500' : ''}`}
                            >
                                <div className="relative shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-300 ring-1 ring-zinc-700">
                                        {chat.avatar}
                                    </div>
                                    {chat.status === 'online' && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900"></div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className={`text-sm truncate ${activeChat === chat.id ? 'font-bold text-blue-400' : 'font-medium text-white'}`}>
                                            {chat.user}
                                        </h3>
                                        <span className="text-[10px] text-zinc-500 shrink-0">{chat.time}</span>
                                    </div>
                                    <p className={`text-xs truncate ${chat.unread > 0 ? 'text-zinc-200 font-semibold' : 'text-zinc-500'}`}>
                                        {chat.lastMessage}
                                    </p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="flex items-center">
                                        <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                                            {chat.unread}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT AREA: Chat Window */}
                <div className="flex-1 flex flex-col bg-zinc-950/30">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-300 ring-1 ring-zinc-700">
                                {currentConversation.avatar}
                            </div>
                            <div>
                                <h3 className="font-bold text-white">{currentConversation.user}</h3>
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    <span>{currentConversation.company}</span>
                                    <span>•</span>
                                    <span className={currentConversation.status === 'online' ? 'text-green-500' : 'text-zinc-500'}>
                                        {currentConversation.status === 'online' ? 'Online' : 'Last seen recently'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-black/20">
                        {/* Day Separator */}
                        <div className="flex justify-center">
                            <span className="text-[10px] uppercase font-bold text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                                Today
                            </span>
                        </div>

                        {currentConversation.messages.map((msg) => {
                            const isMe = msg.sender === 'me';
                            return (
                                <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] rounded-2xl p-4 shadow-sm ${isMe
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                        <div className={`flex items-center gap-1 mt-1 justify-end text-[10px] ${isMe ? 'text-blue-200' : 'text-zinc-500'}`}>
                                            <span>{msg.time}</span>
                                            {isMe && (
                                                msg.status === 'read' ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                        <form onSubmit={handleSendMessage} className="flex gap-4 items-end">
                            <button type="button" className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                                <Paperclip className="w-5 h-5" />
                            </button>
                            <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center px-4 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-transparent border-none focus:outline-none text-white text-sm py-2"
                                />
                                <button type="button" className="ml-2 text-zinc-500 hover:text-white transition-colors">
                                    <Smile className="w-5 h-5" />
                                </button>
                            </div>
                            <button
                                type="submit"
                                className={`p-3 rounded-xl transition-all ${messageInput.trim()
                                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20'
                                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                    }`}
                                disabled={!messageInput.trim()}
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </ManufacturerLayout>
    );
};

export default ManufacturerChatPage;
