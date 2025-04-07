# Eli5Dev - Technical Terms Simplified

Eli5Dev (Explain Like I'm 5 for Developers) is a resource designed to help new developers understand complex technical concepts through simple analogies and plain explanations.

![Eli5Dev Screenshot](public/screenshot.png)

## 🚀 Features

- **Simple Explanations**: Technical concepts explained in plain language
- **Helpful Analogies**: Each term includes a real-world analogy to aid understanding
- **Search Functionality**: Easily find specific terms
- **Random Term Discovery**: Discover new concepts with a random term generator
- **Dark Mode Support**: Comfortable reading in any environment

## 🔍 Why Eli5Dev?

Learning to code and navigating the tech world involves encountering numerous complex terms and concepts. Eli5Dev bridges the knowledge gap by explaining these concepts as if you were explaining them to a 5-year-old - clear, simple, and relatable.

## 🧰 Tech Stack

- [Astro](https://astro.build) - Fast, modern static site generator
- [React](https://reactjs.org) - For interactive components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [MDX](https://mdxjs.com) - Markdown with JSX for content

## 🤝 Contributing

Contributions are welcome and encouraged! Here's how you can contribute:

1. **Add a new term**: Create a new MDX file in `src/content/terms/` following the existing format
2. **Improve explanations**: Make existing explanations clearer or add better analogies
3. **Fix issues**: Help resolve bugs or improve functionality
4. **Enhance styling**: Make the UI more intuitive and responsive

To contribute:

```bash
# Clone the repository
git clone https://github.com/yourusername/eli5dev.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

Please see our [Contribution Guidelines](CONTRIBUTING.md) for more details.

## 📋 Term Format

Each term follows this structure:
- Title and brief description
- Simple explanation of what the term is
- A real-world analogy to make it relatable
- Key concepts related to the term
- A code example (when applicable)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
