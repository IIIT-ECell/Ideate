import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated,
  } = getKindeServerSession();

  const user = await getUser();

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
      <h1>Dashboard</h1>
      <LogoutLink>Log Out</LogoutLink>
      {user?.email}
      {user?.picture ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={user?.picture} alt="profile picture" />
      ) : (
        <div>ok</div>
      )}
      {user?.given_name} {user?.family_name}
    </main>
  );
}
