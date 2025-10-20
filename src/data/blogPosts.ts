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
    publishedAt: "2025-11-05",
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
    publishedAt: "2025-11-03",
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
    publishedAt: "2025-11-01",
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
    publishedAt: "2025-10-30",
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
    publishedAt: "2025-10-28",
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
    publishedAt: "2025-10-25",
    readTime: "9 min read",
    tags: ["Design", "UI/UX", "Interface"],
  },
  {
    id: "7",
    title: "TypeScript Best Practices for 2024",
    excerpt: "Master TypeScript with these essential tips and patterns that will make your code more robust and maintainable.",
    content: `
# TypeScript Best Practices for 2024

TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are the best practices you should follow.

## Type Safety

Strong typing is TypeScript's superpower. Use it to your advantage.

### Avoid 'any'

The 'any' type defeats the purpose of TypeScript. Use specific types or 'unknown' instead.

## Advanced Types

Learn to use utility types, generics, and conditional types effectively.
    `,
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
    },
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-22",
    readTime: "7 min read",
    tags: ["TypeScript", "Best Practices", "Programming"],
  },
  {
    id: "8",
    title: "Accessibility in Modern Web Apps",
    excerpt: "Learn how to build inclusive web applications that work for everyone, regardless of their abilities.",
    content: `
# Accessibility in Modern Web Apps

Creating accessible applications isn't just about compliance—it's about building better products for everyone.

## ARIA Attributes

Properly using ARIA attributes can dramatically improve screen reader experience.

## Keyboard Navigation

Every interactive element should be accessible via keyboard.

## Color Contrast

Ensure sufficient contrast ratios for text and interactive elements.
    `,
    author: {
      name: "Rachel Green",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    },
    category: "Best Practices",
    coverImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-20",
    readTime: "8 min read",
    tags: ["Accessibility", "Web Development", "UX"],
  },
  {
    id: "9",
    title: "State Management in React 2024",
    excerpt: "A comprehensive comparison of modern state management solutions including Zustand, Redux Toolkit, and Jotai.",
    content: `
# State Management in React 2024

The React ecosystem offers numerous state management solutions. Let's explore when to use each.

## Context API vs External Libraries

Understand when Context API is sufficient and when you need more.

## Zustand: The Minimalist Approach

Zustand offers a simple, unopinionated API that's perfect for most applications.

## Redux Toolkit: The Battle-Tested Solution

For complex applications with predictable state requirements.
    `,
    author: {
      name: "Marcus Lee",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    category: "React",
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-18",
    readTime: "11 min read",
    tags: ["React", "State Management", "Zustand"],
  },
  {
    id: "10",
    title: "Modern CSS Techniques",
    excerpt: "Discover the latest CSS features that will revolutionize how you style your applications.",
    content: `
# Modern CSS Techniques

CSS has evolved tremendously. Here are the modern techniques you should be using.

## Container Queries

Responsive design at the component level.

## CSS Cascade Layers

Better control over specificity and style organization.

## Subgrid

Perfect alignment across nested grids.
    `,
    author: {
      name: "Sofia Martinez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    },
    category: "CSS",
    coverImage: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-15",
    readTime: "6 min read",
    tags: ["CSS", "Modern CSS", "Styling"],
  },
  {
    id: "11",
    title: "API Design Best Practices",
    excerpt: "Build robust, scalable APIs with these proven design patterns and best practices.",
    content: `
# API Design Best Practices

A well-designed API is intuitive, consistent, and versioned properly.

## RESTful Principles

Understanding REST constraints and when to apply them.

## GraphQL vs REST

Choosing the right API paradigm for your use case.

## Authentication & Security

Implementing secure authentication flows.
    `,
    author: {
      name: "Chris Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-12",
    readTime: "9 min read",
    tags: ["API", "Backend", "Architecture"],
  },
  {
    id: "12",
    title: "Optimizing React Performance",
    excerpt: "Learn advanced techniques to make your React applications lightning fast.",
    content: `
# Optimizing React Performance

Performance optimization is crucial for user experience. Here's how to do it right.

## React.memo and useMemo

Prevent unnecessary re-renders with memoization.

## Code Splitting

Load only what you need, when you need it.

## Virtual Scrolling

Handle large lists efficiently.
    `,
    author: {
      name: "Jennifer White",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    },
    category: "Performance",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-10",
    readTime: "10 min read",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    id: "13",
    title: "Advanced React Patterns in 2025",
    excerpt: "Explore compound components, render props, and custom hooks to build reusable, maintainable React applications.",
    content: `
# Advanced React Patterns in 2025

Master these advanced React patterns to write more elegant and maintainable code.

## Compound Components

Create flexible, composable components that work together seamlessly.

## Custom Hooks

Extract and reuse logic across your application with powerful custom hooks.

## Render Props Pattern

Share code between components using a prop whose value is a function.
    `,
    author: {
      name: "Taylor Swift",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
    },
    category: "React",
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-08",
    readTime: "12 min read",
    tags: ["React", "Patterns", "Advanced"],
  },
  {
    id: "14",
    title: "CSS Animation Masterclass",
    excerpt: "Create stunning, performant animations with modern CSS techniques including transitions, keyframes, and view transitions.",
    content: `
# CSS Animation Masterclass

Animations bring your interfaces to life. Learn how to create smooth, performant animations.

## CSS Transitions

Simple, declarative animations for state changes.

## Keyframe Animations

Create complex, multi-step animations with @keyframes.

## View Transitions API

The future of smooth page transitions is here.
    `,
    author: {
      name: "Kevin Hart",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop",
    },
    category: "CSS",
    coverImage: "https://images.unsplash.com/photo-1550063873-ab792950096b?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-05",
    readTime: "9 min read",
    tags: ["CSS", "Animation", "Performance"],
  },
  {
    id: "15",
    title: "Modern Development Workflow 2025",
    excerpt: "Set up the ultimate development environment with the latest tools, automation, and best practices.",
    content: `
# Modern Development Workflow 2025

Optimize your development workflow with cutting-edge tools and practices.

## Version Control

Master Git workflows for solo and team development.

## CI/CD Pipelines

Automate testing, building, and deployment.

## Development Tools

VS Code extensions, terminal tools, and productivity boosters.
    `,
    author: {
      name: "Ryan Garcia",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    },
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    publishedAt: "2025-10-02",
    readTime: "11 min read",
    tags: ["Development", "Workflow", "Tools"],
  },
  {
    id: "16",
    title: "Web Performance Budget Guide",
    excerpt: "Learn how to set and maintain performance budgets that keep your site fast for all users.",
    content: `
# Web Performance Budget Guide

Performance budgets ensure your site stays fast as it grows.

## Setting Budget Limits

Define realistic metrics based on your users' needs.

## Monitoring Tools

Use Lighthouse, WebPageTest, and custom monitoring.

## Enforcement Strategies

Prevent performance regressions in your CI/CD pipeline.
    `,
    author: {
      name: "Nina Patel",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    },
    category: "Performance",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-28",
    readTime: "8 min read",
    tags: ["Performance", "Metrics", "Monitoring"],
  },
  {
    id: "17",
    title: "Design Systems from Scratch",
    excerpt: "Build a comprehensive design system that scales with your product and team.",
    content: `
# Design Systems from Scratch

A solid design system is the foundation of consistent, scalable products.

## Component Libraries

Create reusable, accessible components.

## Design Tokens

Define colors, spacing, typography as scalable variables.

## Documentation

Make your design system easy to use and maintain.
    `,
    author: {
      name: "Olivia Chen",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop",
    },
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-25",
    readTime: "13 min read",
    tags: ["Design", "Design Systems", "Components"],
  },
  {
    id: "18",
    title: "Code Review Best Practices",
    excerpt: "Master the art of giving and receiving code reviews that improve code quality and team collaboration.",
    content: `
# Code Review Best Practices

Effective code reviews improve code quality and team skills.

## Writing Reviewable Code

Structure your PRs for easy review and quick approval.

## Giving Constructive Feedback

Be kind, specific, and actionable in your reviews.

## Responding to Feedback

Handle criticism professionally and learn from every review.
    `,
    author: {
      name: "Marcus Lee",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    category: "Best Practices",
    coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-22",
    readTime: "7 min read",
    tags: ["Best Practices", "Team", "Code Review"],
  },
  {
    id: "19",
    title: "React Server Components Deep Dive",
    excerpt: "Understand React Server Components and how they're revolutionizing React application architecture.",
    content: `
# React Server Components Deep Dive

Server Components represent a paradigm shift in React development.

## What Are Server Components?

Components that render on the server, reducing client bundle size.

## Benefits and Trade-offs

Understand when to use Server vs Client components.

## Implementation Patterns

Real-world examples and best practices.
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    category: "React",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-20",
    readTime: "14 min read",
    tags: ["React", "Server Components", "Architecture"],
  },
  {
    id: "20",
    title: "Responsive Design in 2025",
    excerpt: "Modern techniques for creating truly responsive designs that work beautifully across all devices.",
    content: `
# Responsive Design in 2025

Mobile-first is no longer enough. Learn modern responsive strategies.

## Container Queries

Design components that adapt to their container, not just viewport.

## Fluid Typography

Create scalable text that looks perfect at any size.

## Modern Layout Techniques

Combine Grid, Flexbox, and new CSS features for flexible layouts.
    `,
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    category: "CSS",
    coverImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-18",
    readTime: "10 min read",
    tags: ["CSS", "Responsive", "Design"],
  },
  {
    id: "21",
    title: "Testing Strategies for Modern Apps",
    excerpt: "Comprehensive guide to unit, integration, and E2E testing that gives you confidence in your code.",
    content: `
# Testing Strategies for Modern Apps

Good tests make refactoring fearless and deployments confident.

## Unit Testing

Test individual functions and components in isolation.

## Integration Testing

Ensure your components work together correctly.

## E2E Testing

Simulate real user workflows to catch critical bugs.
    `,
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    category: "Best Practices",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-15",
    readTime: "12 min read",
    tags: ["Testing", "Best Practices", "Quality"],
  },
  {
    id: "22",
    title: "Progressive Web Apps in 2025",
    excerpt: "Build PWAs that deliver native-like experiences with offline support, push notifications, and more.",
    content: `
# Progressive Web Apps in 2025

PWAs bridge the gap between web and native apps.

## Service Workers

Enable offline functionality and background sync.

## App Manifest

Make your web app installable on any device.

## Push Notifications

Engage users even when they're not browsing.
    `,
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
    },
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-12",
    readTime: "11 min read",
    tags: ["PWA", "Development", "Mobile"],
  },
  {
    id: "23",
    title: "Image Optimization Techniques",
    excerpt: "Master modern image formats, lazy loading, and responsive images for blazing fast load times.",
    content: `
# Image Optimization Techniques

Images often account for most of a page's weight. Optimize them right.

## Modern Image Formats

WebP, AVIF, and when to use each format.

## Responsive Images

Serve the right size image for each device and screen.

## Lazy Loading

Load images only when needed for faster initial page loads.
    `,
    author: {
      name: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    },
    category: "Performance",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-10",
    readTime: "8 min read",
    tags: ["Performance", "Images", "Optimization"],
  },
  {
    id: "24",
    title: "User Experience Principles",
    excerpt: "Design interfaces that users love by following core UX principles and psychology-backed patterns.",
    content: `
# User Experience Principles

Great UX is invisible. Bad UX is frustrating. Learn the difference.

## User Research

Understand your users before designing solutions.

## Interaction Design

Create intuitive, delightful interactions.

## Usability Testing

Validate your designs with real users.
    `,
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=1200&h=600&fit=crop",
    publishedAt: "2025-09-08",
    readTime: "9 min read",
    tags: ["Design", "UX", "User Research"],
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
