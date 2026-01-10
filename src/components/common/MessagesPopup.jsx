import React from 'react';
import { Link } from 'react-router-dom';
import { X, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';

const MessagesPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Realistic Mock Data
    const messages = [
        {
            id: 1,
            sender: "Fermoscapes Admin",
            avatar: "F",
            avatarColor: "bg-orange-600",
            text: "Your bulk order #ORD-2024-001 has been shipped. Track it here...",
            time: "25m ago",
            unread: true
        },
        {
            id: 2,
            sender: "Giriraj Support",
            avatar: "G",
            avatarColor: "bg-blue-600",
            text: "Quotation for PVC Coated Fabric is ready for review.",
            time: "2h ago",
            unread: false
        },
        {
            id: 3,
            sender: "Jasch Industries",
            avatar: "J",
            avatarColor: "bg-indigo-600",
            text: "regarding the technical specifications of the coating system...",
            time: "1d ago",
            unread: false
        }
    ];

    return (
        <div className="absolute top-full right-0 mt-3 w-80 md:w-96 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-50 ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    <h3 className="font-bold text-white text-sm">Messages</h3>
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                </div>
                <button
                    onClick={onClose}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Message List */}
            <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`p-4 border-b border-zinc-800/50 hover:bg-zinc-800/40 cursor-pointer transition-colors group relative ${msg.unread ? 'bg-blue-500/5' : ''}`}
                    >
                        <div className="flex gap-3">
                            {/* Avatar */}
                            <div className={`w-10 h-10 rounded-full ${msg.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0 ring-2 ring-zinc-900 shadow-lg group-hover:scale-105 transition-transform`}>
                                {msg.avatar}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-0.5">
                                    <h4 className={`text-sm font-semibold truncate ${msg.unread ? 'text-white' : 'text-zinc-300'}`}>
                                        {msg.sender}
                                    </h4>
                                    <span className="text-[10px] text-zinc-500 font-medium whitespace-nowrap flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {msg.time}
                                    </span>
                                </div>
                                <p className={`text-xs truncate leading-relaxed ${msg.unread ? 'text-zinc-300 font-medium' : 'text-zinc-500'}`}>
                                    {msg.text}
                                </p>
                            </div>
                        </div>

                        {/* Unread Indicator */}
                        {msg.unread && (
                            <div className="absolute top-4 right-2 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-zinc-900"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-2 bg-zinc-900/50 backdrop-blur-md border-t border-zinc-800">
                <Link
                    to="/messages"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all group"
                >
                    View All Messages
                    <CheckCircle2 className="w-3.5 h-3.5 group-hover:text-blue-500 transition-colors" />
                </Link>
            </div>
        </div>
    );
};

export default MessagesPopup;
