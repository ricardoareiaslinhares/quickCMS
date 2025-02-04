export enum PostStatus {
    PUBLISH = "PUBLISH",
    DISABLE = "DISABLE",
    DRAFT = "DRAFT",
  }
  
  export enum Role {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    USER = "USER",
  }
  
  export interface User {
    user_id: number;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    authors: Author[];
    categories: Category[];
    tags: Tag[];
    posts: Post[];
    imageLinks: ImageLink[];
  }
  
  export interface Author {
    author_id: number;
    user_id: number;
    user: User;
    name: string;
    imageLink?: string;
    bio?: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    posts: Post[];
  }
  
  export interface Post {
    post_id: number;
    user_id: number;
    user: User;
    slug?: string;
    title: string;
    body: string;
    description?: string;
    descriptionShort?: string;
    author_id: number;
    author: Author;
    status: PostStatus;
    numbers: PostNumber[];
    categories: PostCategory[];
    tags: PostTag[];
    images: PostImage[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Number {
    number_id: number;
    post_id: number;
    posts: PostNumber[];
    name: string;
    value: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Category {
    category_id: number;
    user_id: number;
    user: User;
    name: string;
    posts: PostCategory[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Tag {
    tag_id: number;
    user_id: number;
    user: User;
    name: string;
    posts: PostTag[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ImageLink {
    imageLink_id: number;
    user_id: number;
    user: User;
    name: string;
    link: string;
    posts: PostImage[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface PostNumber {
    id: number;
    post_id: number;
    post: Post;
    number_id: number;
    number: Number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface PostCategory {
    id: number;
    post_id: number;
    post: Post;
    category_id: number;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface PostTag {
    id: number;
    post_id: number;
    post: Post;
    tag_id: number;
    tag: Tag;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface PostImage {
    id: number;
    post_id: number;
    post: Post;
    imageLink_id: number;
    imageLink: ImageLink;
    createdAt: Date;
    updatedAt: Date;
  }