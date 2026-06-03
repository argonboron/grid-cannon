// Core Domain Types
// GameInstance
// Card
// CardStack
// Royal
// GridStack
// Position

// export type GameAction =
//   | { type: "DRAW_CARD" }
//   | { type: "PLACE_CARD"; cardId: string; position: Position }
//   | { type: "USE_ACE"; target: GridStack }
//   | { type: "USE_JOKER"; from: Position; to: Position };

// export type GameState = {
//   seed: number;
//   deck: Card[];
//   discard: Card[];
//   grid: (CardStack | null)[][]; // 3x3
//   royals: Royal[];
//   ploys: {
//     aces: number;
//     jokers: number;
//   };
//   status: "playing" | "won" | "lost";
// };