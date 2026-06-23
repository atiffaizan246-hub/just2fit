import { FeatureItem, FacilityItem, TestimonialItem, MembershipPlan, GalleryItem } from "./types";
import gymHeroBg from "./assets/images/gym_hero_bg_1781514165897.jpg";
import gymCardioZone from "./assets/images/gym_cardio_zone_1781514200229.jpg";
import gymStrengthArea from "./assets/images/gym_strength_area_1781514183374.jpg";
import gymTrainerAssist from "./assets/images/gym_trainer_assist_1781514216308.jpg";

export const BRAND_INFO = {
  name: "JUST 2 FIT - GYM",
  rating: "4.8",
  reviewCount: "519+",
  address: "02, Desh Bandhu Gupta Rd, in front of Police Station, Motia Khan, Paharganj, New Delhi, Delhi 110055",
  phone: "+919990318990",
  phoneFormatted: "+91 99903 18990",
  mapsLatLng: "J6W5+FG New Delhi, Delhi",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4429987823347!2d77.2023956!3d28.6464522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd25d6eb5947%3A0xe54ecc3d73507b91!2sJUST%202%20FIT%20GYM!5e0!3m2!1sen!2sin!4v1718442000000!5m2!1sen!2sin",
  whatsappUrl: "https://wa.me/919990318990?text=Hi%2C%20I%20am%20interested%20in%20joining%20JUST%202%20FIT%20Gym.%20Please%20share%20membership%20details.",
};

export const FEATURES: FeatureItem[] = [
  {
    id: "rating",
    title: "4.8★ Google Rating",
    description: "Trusted by 519+ active members in Paharganj for outstanding results and community support.",
    iconName: "Star",
  },
  {
    id: "ac",
    title: "Fully Air-Conditioned",
    description: "Keep cool and stay energized while pushing your limits in a perfectly climate-controlled environment.",
    iconName: "Wind",
  },
  {
    id: "equipment",
    title: "Latest Gym Equipment",
    description: "Fitted with state-of-the-art bio-mechanically engineered resistance and cardiovascular machines.",
    iconName: "Dumbbell",
  },
  {
    id: "trainers",
    title: "Professional Trainers",
    description: "Certified coaches and personal trainers dedicated to guiding your form, posture, and strength.",
    iconName: "ShieldCheck",
  },
  {
    id: "spacious",
    title: "Spacious Workout Area",
    description: "Ample room for free weights, calisthenics, and post-workout cooling routines without congestion.",
    iconName: "Maximize",
  },
  {
    id: "guidance",
    title: "Personal Guidance",
    description: "Continuous guidance for beginners and advanced athletes alike to avoid injuries and break plateaus.",
    iconName: "Users",
  },
  {
    id: "hygienic",
    title: "Clean & Hygienic",
    description: "Rigorous sanitization protocols on all equipment, workout mats, lockers, and common facilities daily.",
    iconName: "Sparkles",
  },
  {
    id: "parking",
    title: "Easy Access & Parking",
    description: "Centrally located on Desh Bandhu Gupta Road right in front of the Police Station with seamless parking access.",
    iconName: "MapPin",
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "cardio",
    name: "Cardio Zone",
    description: "High-spec treadmills, spin bikes, and cross-trainers fitted with telemetry interfaces to track calories, heart rate, and workouts.",
    image: gymCardioZone,
    iconName: "Activity",
  },
  {
    id: "strength",
    name: "Strength Training Area",
    description: "Equipped with pinpointed pin-select machines and custom-designed plate loaders to safely isolate and bulk various muscle groups.",
    image: gymStrengthArea,
    iconName: "Flame",
  },
  {
    id: "freeweights",
    name: "Free Weights Section",
    description: "An extensive lineup of high-precision steel dumbbells ranging from 2.5kg to 50kg, paired with multiple heavy-duty decline and incline benches.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600",
    iconName: "Grid",
  },
  {
    id: "functional",
    name: "Functional Training Hub",
    description: "Crossfit rigs, kettlebells, medicine balls, battle ropes, and resistance bands to boost functional everyday strength and athletic core power.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    iconName: "Zap",
  },
  {
    id: "personal",
    name: "Personal Training Studio",
    description: "Private customized training sessions from our top tier certified coaches designed explicitly around your body goals and nutrition habits.",
    image: gymTrainerAssist,
    iconName: "UserCheck",
  },
  {
    id: "locker",
    name: "Locker Facility",
    description: "Secure, high-strength individual digital lockers to store your valuables and change with peace of mind before and after training.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
    iconName: "Lock",
  },
  {
    id: "ac",
    name: "Air Conditioning",
    description: "Powerful commercial air conditioning towers maintaining optimal oxygen levels, zero humidity, and fresh constant ventilation.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
    iconName: "Wind",
  },
  {
    id: "washrooms",
    name: "Clean Washrooms",
    description: "Fully-sanitized, spotless, and continuous power-shower facilities for refreshing washdowns inside the gym premises.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    iconName: "Droplets",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Aman Sharma",
    rating: 5,
    text: "Excellent location, cooperative staff, and a friendly environment. The gym is highly motivating and the crowd is great. Truly the best gym package in Paharganj!",
    date: "2 weeks ago",
    isVerified: true,
  },
  {
    id: "t2",
    name: "Pooja Malhotra",
    rating: 5,
    text: "Professional trainers and all the machines needed for a complete workout. I was very nervous joining, but the friendly atmosphere and clean AC rooms made me comfortable instantly.",
    date: "1 month ago",
    isVerified: true,
  },
  {
    id: "t3",
    name: "Rahul Verma",
    rating: 5,
    text: "Clean, hygienic, and well-maintained gym with great atmosphere. The trainers are always around to correct your form. Excellent ventilation which is rare for gyms in Paharganj.",
    date: "3 weeks ago",
    isVerified: true,
  },
  {
    id: "t4",
    name: "Sandeep Yadav",
    rating: 4.8,
    text: "Been training here for 6 months. Lost 12 kgs under personal guidance of trainer. Extremely value for money plans. Easy parking right outside on DB Gupta road.",
    date: "2 months ago",
    isVerified: true,
  },
  {
    id: "t5",
    name: "Divya Gupta",
    rating: 5,
    text: "Great space, separate ladies locker, premium cardio zone and best part is easy road accessibility. Highly recommended to beginners looking for a encouraging environment.",
    date: "1 week ago",
    isVerified: true,
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹1,199",
    period: "month",
    description: "Access our premium cardio and resistance training features.",
    features: [
      "Standard Gym Access",
      "Full Modern Equipment Access",
      "General Trainer Support",
      "Spacious Workout Area Access",
      "A/C & Clean Washroom Access",
    ],
    isPopular: false,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹1,999",
    period: "month",
    badge: "Most Popular",
    description: "Full access plus diet guidance and advanced training consultations.",
    features: [
      "24/7 Full Gym Access Priority",
      "Personalized Guidance & Evaluation",
      "Certified Diet & Nutrition Consultation",
      "Exclusive Free Weights Zone",
      "Private Locker Facility",
      "1 Guest Pass Per Month",
    ],
    isPopular: true,
  },
  {
    id: "personal",
    name: "Personal Training",
    price: "₹4,999",
    period: "month",
    badge: "Elite Results",
    description: "One-on-one professional coaching with strict fitness targets.",
    features: [
      "One-on-One Dedicated Certified Trainer",
      "Highly Customized Weekly Workout Plan",
      "Strict Dynamic Diet Support & Macro Logs",
      "Body Composition Tracking (InBody)",
      "Posture Correction & Mobility Drills",
      "Direct WhatsApp Priority Access 24/7",
    ],
    isPopular: false,
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "Main Workout Area",
    category: "Workout",
    image: gymHeroBg,
  },
  {
    id: "g2",
    title: "Premium Cardio Equipment",
    category: "Cardio",
    image: gymCardioZone,
  },
  {
    id: "g3",
    title: "Heavy Weight Training Area",
    category: "Weights",
    image: gymStrengthArea,
  },
  {
    id: "g4",
    title: "Trainer Assisting Members",
    category: "Trainers",
    image: gymTrainerAssist,
  },
  {
    id: "g5",
    title: "Functional Cross-Training Zone",
    category: "Workout",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g6",
    title: "Spotless Modern Bench Press Setup",
    category: "Weights",
    image: "https://images.unsplash.com/photo-1540206276907-fbd15543e8c5?auto=format&fit=crop&q=80&w=800",
  },
];
