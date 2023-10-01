import { useMemo } from "react";

import { User } from "@prisma/client";
import { FullConversationType } from "../types";
import { useSession } from "next-auth/react";

const useOtherUser = (conversation: FullConversationType | { users: User[] }) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session.data?.user?.email;
    const otherUserFilter = conversation.users.find((user) => user.email !== currentUserEmail);

    return otherUserFilter;
  }, [session.data?.user?.email, conversation.users]);

  return otherUser;
};

export default useOtherUser;
