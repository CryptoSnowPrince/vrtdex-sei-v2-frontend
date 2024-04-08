import { UserResponse, BetResponse, HistoricalBetResponse, RoundResponse } from './responseType'

export interface UserResponseFLUIDEX extends UserResponse<BetResponseFLUIDEX> {
  totalFLUIDEX: string
  totalFLUIDEXBull: string
  totalFLUIDEXBear: string
  averageFLUIDEX: string
  totalFLUIDEXClaimed: string
  netFLUIDEX: string
}

export interface BetResponseFLUIDEX extends BetResponse {
  claimedFLUIDEX: string
  claimedNetFLUIDEX: string
  user?: UserResponseFLUIDEX
  round?: RoundResponseFLUIDEX
}

export type HistoricalBetResponseFLUIDEX = HistoricalBetResponse<UserResponseFLUIDEX>

export type RoundResponseFLUIDEX = RoundResponse<BetResponseFLUIDEX>

export interface TotalWonMarketResponseFLUIDEX {
  totalFLUIDEX: string
  totalFLUIDEXTreasury: string
}

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */
export const roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`

export const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedFLUIDEX
 claimedNetFLUIDEX
 createdAt
 updatedAt
`

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalFLUIDEX
  totalFLUIDEXBull
  totalFLUIDEXBear
  totalBetsClaimed
  totalFLUIDEXClaimed
  winRate
  averageFLUIDEX
  netFLUIDEX
`
