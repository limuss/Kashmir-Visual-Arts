
export type Role = 'admin' | 'artisan' | 'guest';

export interface User {
  id: string;
  name: string;
  role: Role;
  artisanId?: string; // Links user to their artisan profile if role is 'artisan'
}

export interface ArtForm {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  process?: ProcessStep[];
  products?: Product[];
}

export interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

export interface Product {
  name: string;
  image: string;
}

export interface MediaProof {
  id: string;
  title: string;
  type: 'image' | 'document';
  url: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  status: 'pending' | 'live' | 'rejected';
}

export interface Artisan {
  id: string;
  name: string;
  role: string;
  experience: string;
  experienceYears: number;
  age: number;
  location: string;
  artworksCount: number;
  bio: string;
  image: string;
  specialties?: string[];
  status: 'live' | 'pending' | 'suspended';
  mediaProof?: MediaProof[];
  pendingChanges?: Partial<Artisan>; // Stores edits waiting for admin approval
  rejectionNote?: string; // Stores reason for latest rejection
  artworks: Artwork[];
}
