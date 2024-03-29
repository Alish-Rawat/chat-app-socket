import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("converations :", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversation.length - 1}
          />
        );
        // console.log(conversation.fullName);
      })}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
