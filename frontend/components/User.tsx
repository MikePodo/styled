import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { FaUserCircle } from "react-icons/fa";

import { ProfileStyle } from "~styles/components/UserStyle";

const User = () => {
  const router = useRouter();
  const { user } = useUser();

  if (!user)
    return (
      <ProfileStyle onClick={() => router.push("/api/auth/login")}>
        <FaUserCircle />
        <h3>Profile</h3>
      </ProfileStyle>
    );

  return (
    <ProfileStyle onClick={() => router.push("/profile")}>
      <img src={user.picture ?? ""} alt={user.name ?? ""} />
      <h3>{user?.name}</h3>
    </ProfileStyle>
  );
};

export default User;
