import OnlinePlayerList from "./_components/online-player-list";
import RoomChat from "./_components/room-chat";
import RoomConfigForm from "./_components/room-config-form";

export default function CreateRoomPage() {
  return (
    <>
      <h1 className="text-5xl font-black mt-10 -mb-5">Create Rooom</h1>
      <div className="px-4 mt-10">
        <div className="w-full mb-5">
          <RoomConfigForm />
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-5 mt-24 mb-10">
          <OnlinePlayerList />
          <RoomChat />
        </div>
      </div>
    </>
  );
}