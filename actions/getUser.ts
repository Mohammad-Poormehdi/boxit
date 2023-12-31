import authOptions from "@/helpers/auth";
import { getServerSession } from "next-auth";

const getUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return null;
  }
  const user = await prisma?.user.findUnique({
    where: { email: session?.user?.email },
  });
  if (!user) {
    return null;
  }
  return user;
};
export default getUser;
