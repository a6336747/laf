// @ts-ignore
/* eslint-disable */
///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";
import useGlobalStore from "@/pages/globalStore";

/**
 * Create a new subscription
 */
export async function SubscriptionControllerCreate(
  params: Definitions.CreateSubscriptionDto | any,
): Promise<Paths.SubscriptionControllerCreate.Responses> {
  // /v1/subscriptions
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/subscriptions`, {
    method: "POST",
    data: params,
  });
}

/**
 * Get user's subscriptions
 */
export async function SubscriptionControllerFindAll(
  params: Paths.SubscriptionControllerFindAll.BodyParameters | any,
): Promise<Paths.SubscriptionControllerFindAll.Responses> {
  // /v1/subscriptions
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/subscriptions`, {
    method: "GET",
    params: params,
  });
}

/**
 * Get subscription by appid
 */
export async function SubscriptionControllerFindOne(
  params: Paths.SubscriptionControllerFindOne.BodyParameters | any,
): Promise<Paths.SubscriptionControllerFindOne.Responses> {
  // /v1/subscriptions/{appid}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/subscriptions/${_params.appid}`, {
    method: "GET",
    params: params,
  });
}

/**
 * Renew a subscription
 */
export async function SubscriptionControllerRenew(
  params: Definitions.RenewSubscriptionDto | any,
): Promise<Paths.SubscriptionControllerRenew.Responses> {
  // /v1/subscriptions/{id}/renewal
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/subscriptions/${_params.id}/renewal`, {
    method: "POST",
    data: params,
  });
}

/**
 * Upgrade a subscription (TODO)
 */
export async function SubscriptionControllerUpgrade(
  params: Definitions.UpgradeSubscriptionDto | any,
): Promise<Paths.SubscriptionControllerUpgrade.Responses> {
  // /v1/subscriptions/{id}/upgrade
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/subscriptions/${_params.id}/upgrade`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * Delete a subscription
 */
export async function SubscriptionControllerRemove(
  params: Paths.SubscriptionControllerRemove.BodyParameters | any,
): Promise<Paths.SubscriptionControllerRemove.Responses> {
  // /v1/subscriptions/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/subscriptions/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}
