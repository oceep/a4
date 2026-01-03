export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}