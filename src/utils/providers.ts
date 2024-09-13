import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = 'https://evm-rpc.sei-apis.com'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
