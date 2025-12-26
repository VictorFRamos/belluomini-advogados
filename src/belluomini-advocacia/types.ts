
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
