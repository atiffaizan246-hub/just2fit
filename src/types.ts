export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  image: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  isVerified: boolean;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  plan: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Workout" | "Cardio" | "Weights" | "Trainers" | "Ambiance";
  image: string;
}
