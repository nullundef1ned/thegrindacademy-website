interface Lesson {
  title: string;
  description: string;
  duration: number;
}

interface Course {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  images: string[];
  duration: number;
  introVideo: string;
  lessons: Lesson[];
}