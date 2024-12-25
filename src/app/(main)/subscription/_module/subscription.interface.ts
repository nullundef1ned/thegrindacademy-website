export interface IFeature {
  id: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;

}

export interface ISubscriptionPlanFeature {
  id: string;
  planId: string;
  featureId: string;
  feature: IFeature;
  createdAt: string;
  updatedAt: string;
}

export interface ISubscriptionPlan {
  id: string;
  name: string;
  slug: string;
  frequency: string;
  duration: number;
  price: string;
  isDeal: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  features: ISubscriptionPlanFeature[];
}


export interface ISubscriptionRequest {
  firstName: string;
  lastName: string;
  email: string;
  telegramUserName: string;
  referralCode: string;
  subscriptionPlanId: number;
  autoRenewal: boolean;
  courseSlug?: string;
}
