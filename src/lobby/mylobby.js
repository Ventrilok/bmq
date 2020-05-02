import React from "react";
import { Lobby } from "boardgame.io/react";
import OnlineLobby from "./onlinelobby";
import BlancMangerQQ from "../game/game";
import BlancMangerQQBoard from "../components/board/board";

import constant from "../constant";

BlancMangerQQ.minPlayers = 2;
BlancMangerQQ.maxPlayers = 10;

function MyLobby(props) {
  return (
    <Lobby
      gameServer={constant.GAME_SERVER}
      lobbyServer={constant.LOBBY_SERVER}
      refreshInterval={5000}
      seed={654198481}
      debug={constant.DEBUG}
      gameComponents={[
        {
          game: BlancMangerQQ,
          board: BlancMangerQQBoard
        }
      ]}
      renderer={({
        errorMsg,
        gameComponents,
        rooms,
        phase,
        playerName,
        runningGame,
        handleEnterLobby,
        handleExitLobby,
        handleCreateRoom,
        handleJoinRoom,
        handleLeaveRoom,
        handleExitRoom,
        handleRefreshRooms,
        handleStartGame
      }) => (
        <OnlineLobby
          errorMsg={errorMsg}
          gameComponents={gameComponents}
          gameInstances={rooms}
          phase={phase}
          playerName={playerName}
          runningGame={runningGame}
          onEnterLobby={handleEnterLobby}
          onExitLobby={handleExitLobby}
          onCreateRoom={handleCreateRoom}
          onJoinRoom={handleJoinRoom}
          onLeaveRoom={handleLeaveRoom}
          onExitRoom={handleExitRoom}
          onRefreshRooms={handleRefreshRooms}
          onStartGame={handleStartGame}
        />
      )}
    />
  );
}

export default MyLobby;
