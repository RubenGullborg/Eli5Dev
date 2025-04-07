# Contributing to Eli5Dev

Thank you for your interest in contributing to Eli5Dev! This document provides guidelines and instructions for contributing to this project.

## Types of Contributions

### Adding New Terms

1. Create a new `.mdx` file in the `src/content/terms/` directory
2. Follow the existing format (see template below)
3. Focus on clarity and simplicity over technical depth
4. Include a helpful real-world analogy
5. Add relevant tags to help with categorization

### Improving Existing Terms

1. Simplify complex explanations
2. Improve or add analogies to make concepts more relatable
3. Fix inaccuracies or outdated information
4. Add missing key concepts
5. Improve code examples

### Development Contributions

1. Improve site functionality
2. Fix bugs
3. Enhance mobile responsiveness
4. Add new features
5. Improve accessibility

## Term Template

```mdx
---
title: "Term Name"
description: "Short, one-sentence description of the term."
tags: ["relevant", "tags", "here"]
datePublished: YYYY-MM-DD
---

## What is [Term]?

A 2-3 sentence explanation of what the term is and its purpose.

## Simple Analogy

A real-world analogy that helps explain the concept in familiar terms.

## Key Concepts

- **Concept 1**: Brief explanation
- **Concept 2**: Brief explanation
- **Concept 3**: Brief explanation

## Example

```language
// Code example demonstrating the term in practice
```
```

## Style Guidelines

1. **Simple Language**: Avoid jargon or technical terms when explaining another technical term
2. **Conciseness**: Keep explanations brief and to the point
3. **Analogies**: Always include a relatable real-world analogy
4. **Code Examples**: When applicable, include a simple code example
5. **Formatting**: Follow the existing MDX structure for consistency

## Pull Request Process

1. Fork the repository
2. Create a new branch for your contribution
3. Add or modify content following the guidelines above
4. Test your changes locally using `npm run dev`
5. Submit a pull request with a clear description of your changes

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/eli5dev.git

# Navigate to the project directory
cd eli5dev

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Code of Conduct

Please note that this project adheres to a Code of Conduct. By participating, you are expected to uphold this code.

## Questions?

If you have questions about contributing, feel free to open an issue on GitHub for assistance.

Thank you for helping make technical terms more accessible to everyone! 