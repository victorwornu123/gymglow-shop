export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Modern Web Development",
    excerpt: "Learn the fundamentals of building modern web applications with React, TypeScript, and cutting-edge tools.",
    content: `
# Getting Started with Modern Web Development

Modern web development has evolved dramatically over the past few years. In this comprehensive guide, we'll explore the essential tools and technologies you need to build amazing web applications.

## Why Modern Web Development Matters

The web is constantly evolving, and staying up-to-date with the latest technologies is crucial for creating fast, responsive, and user-friendly applications.

### Key Technologies

- **React**: A powerful library for building user interfaces
- **TypeScript**: Type-safe JavaScript for better code quality
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework

## Getting Started

To begin your journey in modern web development, you'll need to understand the fundamentals of JavaScript, HTML, and CSS. Once you have a solid foundation, you can move on to more advanced topics like state management, routing, and API integration.

### Best Practices

1. Write clean, maintainable code
2. Follow accessibility guidelines
3. Optimize for performance
4. Test your applications thoroughly

The future of web development is bright, and there's never been a better time to start learning!
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
  },
  {
    id: "2",
    title: "The Art of Clean Code",
    excerpt: "Discover the principles and practices that make code readable, maintainable, and elegant.",
    content: `
# The Art of Clean Code

Writing clean code is an art that every developer should master. Clean code is not just about making your code work—it's about making it readable, maintainable, and elegant.

## What is Clean Code?

Clean code is code that is easy to understand and easy to change. It follows consistent naming conventions, has clear structure, and is well-documented.

### Key Principles

- **Single Responsibility**: Each function should do one thing well
- **Don't Repeat Yourself (DRY)**: Avoid code duplication
- **KISS (Keep It Simple, Stupid)**: Simplicity is key

## Practical Examples

Let's look at some practical examples of how to write cleaner code...
    `,
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    category: "Best Practices",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    publishedAt: "2024-03-12",
    readTime: "8 min read",
    tags: ["Clean Code", "Best Practices", "Programming"],
  },
  {
    id: "3",
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A complete guide to modern CSS layout techniques that will transform how you build responsive designs.",
    content: `
# Mastering CSS Grid and Flexbox

CSS Grid and Flexbox are powerful layout systems that have revolutionized how we build responsive web designs. In this guide, we'll explore both in depth.

## Understanding Flexbox

Flexbox is perfect for one-dimensional layouts. It excels at distributing space and aligning items in a container.

## CSS Grid for Two-Dimensional Layouts

CSS Grid is ideal when you need to control both rows and columns simultaneously.

### When to Use Each

- Use Flexbox for: Navigation bars, card layouts, centering content
- Use Grid for: Page layouts, image galleries, complex responsive designs
    `,
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    category: "CSS",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop",
    publishedAt: "2024-03-10",
    readTime: "6 min read",
    tags: ["CSS", "Design", "Responsive"],
  },
  {
    id: "4",
    title: "Building Scalable React Applications",
    excerpt: "Learn the architecture patterns and best practices for building large-scale React applications.",
    content: `
# Building Scalable React Applications

As your React application grows, maintaining clean architecture becomes crucial. This guide covers essential patterns for scaling React apps.

## Component Architecture

Organizing your components effectively is the foundation of a scalable application.

### Folder Structure

A well-organized folder structure makes your codebase maintainable and easy to navigate.

## State Management

Choosing the right state management solution depends on your application's complexity and requirements.
    `,
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    category: "React",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    publishedAt: "2024-03-08",
    readTime: "10 min read",
    tags: ["React", "Architecture", "Scalability"],
  },
  {
    id: "5",
    title: "The Future of Web Performance",
    excerpt: "Explore the latest techniques and tools for optimizing web application performance.",
    content: `
# The Future of Web Performance

Web performance is more important than ever. Users expect fast, responsive applications, and search engines reward sites that deliver great experiences.

## Core Web Vitals

Understanding and optimizing Core Web Vitals is essential for modern web development.

### Performance Metrics

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

## Optimization Techniques

Learn practical techniques to improve your application's performance.
    `,
    author: {
      name: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    },
    category: "Performance",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    publishedAt: "2024-03-05",
    readTime: "7 min read",
    tags: ["Performance", "Optimization", "Web Vitals"],
  },
  {
    id: "6",
    title: "Designing Beautiful User Interfaces",
    excerpt: "A designer's guide to creating stunning, user-friendly interfaces that delight users.",
    content: `
# Designing Beautiful User Interfaces

Great UI design combines aesthetics with usability. This guide explores the principles of creating beautiful, functional interfaces.

## Design Principles

- Consistency
- Hierarchy
- White Space
- Typography
- Color Theory

## Tools and Resources

Discover the tools that professional designers use to create amazing interfaces.
    `,
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    publishedAt: "2024-03-02",
    readTime: "9 min read",
    tags: ["Design", "UI/UX", "Interface"],
  },
];

export const categories = [
  "All",
  "Development",
  "Design",
  "React",
  "CSS",
  "Performance",
  "Best Practices",
];
