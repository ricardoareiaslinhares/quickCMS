import { Author, PostStatus, Role, User } from "@/entities/Posts";

export const fakeUser: User = {
    user_id: 1,
    email: "john.doe@example.com",
    name: "John Doe",
    createdAt: new Date(),
    updatedAt: new Date(),
    authors: [
      {
        author_id: 1,
        user_id: 1,
        user: {} as User, // Will be assigned later to avoid circular reference
        name: "John Doe",
        imageLink: "https://example.com/profile.jpg",
        bio: "Tech writer and software engineer.",
        role: Role.ADMIN,
        createdAt: new Date(),
        updatedAt: new Date(),
        posts: [],
      },
    ],
    categories: [
      {
        category_id: 1,
        user_id: 1,
        user: {} as User, // Will be assigned later
        name: "Technology",
        posts: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    tags: [
      {
        tag_id: 1,
        user_id: 1,
        user: {} as User, // Will be assigned later
        name: "React",
        posts: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    posts: [
      {
        post_id: 1,
        user_id: 1,
        user: {} as User, // Will be assigned later
        slug: "introduction-to-react",
        title: "Introduction to React",
        body: "This is a beginner-friendly guide to React.",
        description: "A short introduction to React and its core concepts.",
        descriptionShort: "Intro to React",
        author_id: 1,
        author: {} as Author, // Will be assigned later
        status: PostStatus.PUBLISH,
        numbers: [],
        categories: [],
        tags: [],
        images: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    imageLinks: [
      {
        imageLink_id: 1,
        user_id: 1,
        user: {} as User, // Will be assigned later
        name: "Profile Picture",
        link: "https://example.com/profile.jpg",
        posts: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };
  
  // Fix circular references
  fakeUser.authors[0].user = fakeUser;
  fakeUser.categories[0].user = fakeUser;
  fakeUser.tags[0].user = fakeUser;
  fakeUser.posts[0].user = fakeUser;
  fakeUser.posts[0].author = fakeUser.authors[0];
  fakeUser.imageLinks![0].user = fakeUser;
  
