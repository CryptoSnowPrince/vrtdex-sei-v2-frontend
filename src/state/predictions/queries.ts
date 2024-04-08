import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsFLUIDEX,
  betBaseFields as betBaseFieldsFLUIDEX,
  userBaseFields as userBaseFieldsFLUIDEX,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'VRT' ? roundBaseFieldsFLUIDEX : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) => (tokenSymbol === 'VRT' ? betBaseFieldsFLUIDEX : betBaseFieldsBNB)

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'VRT' ? userBaseFieldsFLUIDEX : userBaseFieldsBNB
