import {assertNotNull} from '@subsquid/util-internal'
import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import {allFields} from './allFields'

export const processor = new EvmBatchProcessor()
    .setRpcEndpoint({
        url: 'https://rpc.ankr.com/bsc',
        rateLimit: 10
    })
    .setFinalityConfirmation(5)
    .setFields(allFields)
    .addTransaction({
        to: ['0x55d398326f99059ff775485246999027b3197955'],
        range: {from: 32_000_000, to: 32_001_000}
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
