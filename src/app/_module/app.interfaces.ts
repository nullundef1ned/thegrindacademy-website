export interface IPagination<T> {
  result: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  previousPage: number | null;
  nextPage: number | null;
}

export interface ICourseMedia {
  id: string;
  courseId: string;
  thumbnailUrl: string;
  imageUrls: string[];
  introVideoUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICourseLesson {
  id: string;
  courseId: string;
  position: number;
  description?: string;
  title: string;
  slug: string;
  studyTimeInMinutes: number;
  createdAt: string;
  updatedAt: string;
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
  media: ICourseMedia;
  lessons: ICourseLesson[];
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

export interface ISocialMediaLink {
  type: string;
  url: string;
}

export interface IMeta {
  id: string;
  title: string;
  description: string;
  keywords: string;
  supportEmail: string;
  socialMediaLinks: ISocialMediaLink[];
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
