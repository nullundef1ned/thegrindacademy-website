export interface IPagination<T> {
  result: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  previousPage: number | null;
  nextPage: number | null;
}

export interface ICourse {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  telegramChannelId: string;
  status: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  media: {
    id: string;
    courseId: string;
    thumbnailUrl: string;
    imageUrls: string[];
    introVideoUrl: string;
    createdAt: string;
    updatedAt: string;
  }
}

export interface IStudentInterview {
  id: string;
  fullName: string;
  description: string;
  mediaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITestimonial {
  id: string;
  imageUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IInfluencer {
  id: string;
  title: string;
  content: string;
  mediaUrl: string;
  thumbnailUrl: string;
  buttonUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDynamicContent {
  id: string;
  title: string;
  isPublished: boolean;
  content: string;
  mediaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMeta {
  id: string;
  title: string;
  description: string;
  keywords: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPrivacyPolicy {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITermsAndConditions {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
