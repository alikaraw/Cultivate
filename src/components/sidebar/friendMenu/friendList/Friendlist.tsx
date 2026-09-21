import type { PopupPosition } from "../../../../types/PopupPosition";
import type { FriendState } from "../../../../types/FriendState";
import FriendlistItem from "./FriendlistItem";
import "./Friendlist.css";

type FriendListProps = {
  onFriendClick: (
    username: string,
    position: PopupPosition
  ) => void;
};

const ONLINE_FRIENDS = [
  "ShadowByte",
  "VortexRider",
  "PixelPhantom",
  "NeonNova",
  "CyberSlayer",
  "AstroKnight"
];

const INGAME_FRIENDS: string[] = [
  "RiftWalker",
  "ApexPredator",
  "ShadowSentry",
  "HyperionCore",
  "GhostProtocol",
  "StarlightVanguard",
  "BlazeSpecter",
  "VenomousViper",
];

const OFFLINE_FRIENDS = [
  "IronClaw",
  "FrostPulse",
  "QuantumRogue",
  "ZenithStrike",
  "Danlash32",
  "Ronida",
  "TitanBreaker",
  "SolarisPrime"
];

export default function FriendList({ onFriendClick }: FriendListProps) {
  return (
    <div className="friendListWrapper">
      <p>Online · {ONLINE_FRIENDS.length + INGAME_FRIENDS.length}</p>
      <div className="friendListSection">
        {ONLINE_FRIENDS.map((username) => (
          <FriendlistItem
            onFriendClick={onFriendClick}
            username={username}
            status="Online"
            state={"online"}
          />
        ))}

        {INGAME_FRIENDS.map((username) => (
          <FriendlistItem
            onFriendClick={onFriendClick}
            username={username}
            status="In Game"
            state={"ingame"}
          />
        ))}
      </div>

      <p>Offline · {OFFLINE_FRIENDS.length}</p>
      <div className="friendListSection">
        {OFFLINE_FRIENDS.map((username) => (
          <FriendlistItem
            onFriendClick={onFriendClick}
            username={username}
            status={"Offline"}
            state={"offline"}
          />
        ))}
      </div>
    </div>
  );
}