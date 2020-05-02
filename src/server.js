import { Server } from "boardgame.io/server";
import BlancMangerQQ from "./game/game";

const server = Server({ games: [BlancMangerQQ] });
server.run(2468);
