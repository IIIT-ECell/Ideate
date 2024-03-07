import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import type { Metadata } from "next";
import Card from "@/app/components/card";

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

  const cards = [
    Card({
      title: "A very cool idea",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      tags: ["banana", "kela"],
    }),
    Card({
      title: "A very cool idea",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      tags: ["banana", "kela"],
    }),
    Card({
      title: "A very cool idea",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      tags: ["banana", "kela"],
    }),
    Card({
      title: "A very cool idea",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      tags: ["banana", "kela"],
    }),
    Card({
      title: "A very cool idea",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      tags: ["banana", "kela"],
    }),
    Card({
      title: "A very cool idea",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      tags: ["banana", "kela"],
    }),
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col text-6xl p-24">
      <h1 className="py-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {cards.map((card) => card)}
      </div>
    </main>
  );
}
