// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { SwapPermit2GetPriceData, SwapPermit2GetPriceError, SwapPermit2GetPriceResponse, SwapPermit2GetQuoteData, SwapPermit2GetQuoteError, SwapPermit2GetQuoteResponse, SwapAllowanceHolderGetPriceData, SwapAllowanceHolderGetPriceError, SwapAllowanceHolderGetPriceResponse, SwapAllowanceHolderGetQuoteData, SwapAllowanceHolderGetQuoteError, SwapAllowanceHolderGetQuoteResponse, GaslessGetPriceData, GaslessGetPriceError, GaslessGetPriceResponse, GaslessGetQuoteData, GaslessGetQuoteError, GaslessGetQuoteResponse, GaslessSubmitData, GaslessSubmitError, GaslessSubmitResponse, GaslessGetStatusData, GaslessGetStatusError, GaslessGetStatusResponse, GaslessGetGaslessApprovalTokensData, GaslessGetGaslessApprovalTokensError, GaslessGetGaslessApprovalTokensResponse, SourcesGetSourcesData, SourcesGetSourcesError, SourcesGetSourcesResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * getPrice (Permit2)
 * Get the indicative price for a swap using Permit2 to set allowances
 */
export const swapPermit2GetPrice = <ThrowOnError extends boolean = false>(options: Options<SwapPermit2GetPriceData, ThrowOnError>) => { return (options?.client ?? client).get<SwapPermit2GetPriceResponse, SwapPermit2GetPriceError, ThrowOnError>({
    ...options,
    url: '/swap/permit2/price'
}); };

/**
 * getQuote (Permit2)
 * Get the firm quote for a swap using Permit2 to set allowances
 */
export const swapPermit2GetQuote = <ThrowOnError extends boolean = false>(options: Options<SwapPermit2GetQuoteData, ThrowOnError>) => { return (options?.client ?? client).get<SwapPermit2GetQuoteResponse, SwapPermit2GetQuoteError, ThrowOnError>({
    ...options,
    url: '/swap/permit2/quote'
}); };

/**
 * getPrice (Allowance Holder)
 * Get the indicative price for a swap using Allowance Holder to set allowances
 */
export const swapAllowanceHolderGetPrice = <ThrowOnError extends boolean = false>(options: Options<SwapAllowanceHolderGetPriceData, ThrowOnError>) => { return (options?.client ?? client).get<SwapAllowanceHolderGetPriceResponse, SwapAllowanceHolderGetPriceError, ThrowOnError>({
    ...options,
    url: '/swap/allowance-holder/price'
}); };

/**
 * getQuote (Allowance Holder)
 * Get the firm quote for a swap using Allowance Holder to set allowances
 */
export const swapAllowanceHolderGetQuote = <ThrowOnError extends boolean = false>(options: Options<SwapAllowanceHolderGetQuoteData, ThrowOnError>) => { return (options?.client ?? client).get<SwapAllowanceHolderGetQuoteResponse, SwapAllowanceHolderGetQuoteError, ThrowOnError>({
    ...options,
    url: '/swap/allowance-holder/quote'
}); };

/**
 * getPrice
 * Get the indicative price for a gasless swap
 */
export const gaslessGetPrice = <ThrowOnError extends boolean = false>(options: Options<GaslessGetPriceData, ThrowOnError>) => { return (options?.client ?? client).get<GaslessGetPriceResponse, GaslessGetPriceError, ThrowOnError>({
    ...options,
    url: '/gasless/price'
}); };

/**
 * getQuote
 * Get the firm quote for a gasless swap
 */
export const gaslessGetQuote = <ThrowOnError extends boolean = false>(options: Options<GaslessGetQuoteData, ThrowOnError>) => { return (options?.client ?? client).get<GaslessGetQuoteResponse, GaslessGetQuoteError, ThrowOnError>({
    ...options,
    url: '/gasless/quote'
}); };

/**
 * submit
 * Submit a gasless swap
 */
export const gaslessSubmit = <ThrowOnError extends boolean = false>(options: Options<GaslessSubmitData, ThrowOnError>) => { return (options?.client ?? client).post<GaslessSubmitResponse, GaslessSubmitError, ThrowOnError>({
    ...options,
    url: '/gasless/submit'
}); };

/**
 * getStatus
 * Get the status of a gasless swap
 */
export const gaslessGetStatus = <ThrowOnError extends boolean = false>(options: Options<GaslessGetStatusData, ThrowOnError>) => { return (options?.client ?? client).get<GaslessGetStatusResponse, GaslessGetStatusError, ThrowOnError>({
    ...options,
    url: '/gasless/status/{tradeHash}'
}); };

/**
 * getGaslessApprovalTokens
 * Get token addresses that support gasless approvals
 */
export const gaslessGetGaslessApprovalTokens = <ThrowOnError extends boolean = false>(options: Options<GaslessGetGaslessApprovalTokensData, ThrowOnError>) => { return (options?.client ?? client).get<GaslessGetGaslessApprovalTokensResponse, GaslessGetGaslessApprovalTokensError, ThrowOnError>({
    ...options,
    url: '/gasless/gasless-approval-tokens'
}); };

/**
 * getSources
 * Get the list of supported sources
 */
export const sourcesGetSources = <ThrowOnError extends boolean = false>(options: Options<SourcesGetSourcesData, ThrowOnError>) => { return (options?.client ?? client).get<SourcesGetSourcesResponse, SourcesGetSourcesError, ThrowOnError>({
    ...options,
    url: '/sources'
}); };