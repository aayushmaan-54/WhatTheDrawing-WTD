import Icon from "@/assets/icons";
import Image from "next/image";

export default function OnlinePlayerList() {

  return (
    <>
      <aside className="doodle-big-border">
        <h1 className="text-4xl font-bold">Online Players: </h1>

        <div className="flex doodle-border">
          <div className="flex flex-col px-3 pr-5">
            <p className="text-3xl font-bold -mb-2">#1</p>
            <Icon.Crown className="size-6" />
          </div>

          <div className="flex flex-col mr-3">
            <p className="text-2xl font-bold -mb-1">Player Name</p>
            <p className="font-bold">0 Points</p>
          </div>

          <div className="flex items-center">
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="user avatar"
            />
          </div>
        </div>

      </aside>
    </>
  );
}