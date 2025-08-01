/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * AutoGPT Agent Server
 * This server is used to execute agents that are created by the AutoGPT system.
 * OpenAPI spec version: 0.1
 */
import type { TurnstileVerifyRequestAction } from "./turnstileVerifyRequestAction";

/**
 * Request model for verifying a Turnstile token.
 */
export interface TurnstileVerifyRequest {
  /** The Turnstile token to verify */
  token: string;
  /** The action that the user is attempting to perform */
  action?: TurnstileVerifyRequestAction;
}
