# How to Add New Articles

To add a new article to the website, follow these simple steps:

1. Open `src/data/articles.json`.
2. Scroll to the very bottom of the file.
3. Before the final closing bracket `]`, add a comma `,` to the last item.
4. Paste the following template and fill in your real information:

```json
  {
    "id": "13",
    "title": "Your Article Title Here",
    "description": "A short summary of your article.",
    "category": "Nutrition",
    "image": "/your_image_path.png",
    "readTime": 5,
    "date": "May 25, 2024",
    "content": "This is your first paragraph.\n\nThis is your second paragraph. Use backslash-n-backslash-n to create new line breaks!"
  }
```

### Important Rules:
- **IDs**: Make sure every article has a unique `id` number (e.g., "13", "14").
- **Paragraphs**: You cannot press "Enter" on your keyboard to make a new line in JSON. Instead, type `\n\n` wherever you want a paragraph break.
- **Quotes**: Make sure all keys and text are wrapped in double quotes `" "`.
- **Categories**: Your category must exactly match one of the active categories (e.g., "Nutrition", "Family Wellness", "Kids Wellness", "Healthy Aging", "Natural Living", "Recipes & Habits").
