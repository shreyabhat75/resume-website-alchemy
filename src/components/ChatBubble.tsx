
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating chat bubble button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-portfolio-primary text-white rounded-full p-4 shadow-lg hover:bg-portfolio-primary/90 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] h-[700px] p-0">
          <DialogHeader className="bg-portfolio-primary text-white p-4 rounded-t-lg flex flex-row justify-between items-center">
            <DialogTitle>Chat with Shreya's Bot</DialogTitle>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <X size={18} />
            </button>
          </DialogHeader>
          <div className="h-full">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/DU8TbCdJJ6S-tE-sGJn0q"
              width="100%"
              style={{ height: "calc(100% - 64px)" }}
              frameBorder="0"
              title="Shreya's Portfolio Chatbot"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBubble;
