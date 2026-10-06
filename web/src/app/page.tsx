import type { Metadata } from "next";
import { FrontDoor } from "./FrontDoor";
import { HomeView } from "./HomeView";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <FrontDoor>
      <HomeView />
    </FrontDoor>
  );
}
