import { lazy, Suspense, useState } from "react";

const loadChatBot = () => import("./ChatBot.jsx");
const ChatBot = lazy(loadChatBot);

export default function ChatBotLoader() {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);

  if (!enabled) {
    return (
      <div className="bot">
        <button
          type="button"
          className="bot__launcher"
          aria-expanded="false"
          aria-label="Tanya — buka obrolan bantuan"
          onPointerEnter={loadChatBot}
          onFocus={loadChatBot}
          onClick={() => {
            setOpen(true);
            setEnabled(true);
          }}
        >
          <span className="bot__icon" aria-hidden="true">
            ?
          </span>
          <span>Tanya</span>
        </button>
      </div>
    );
  }

  return (
    <Suspense fallback={null}>
      <ChatBot defaultOpen={open} />
    </Suspense>
  );
}
