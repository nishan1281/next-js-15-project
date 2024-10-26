# next-js-15-project

This is an web project which will show some functionality using typescript, nextjs 15 and tailwind CSS
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Important HTML Tags

## Semantic HTML Elements

- `<section></section>`  
  Defines a thematic grouping of content, typically with a heading. Used to separate different sections of a document, enhancing the structure and accessibility.

- `<main></main>`  
  Represents the main content of a document, excluding headers, footers, and sidebars. It helps search engines and assistive technologies identify the primary content of the page.

- `<header></header>`  
  Contains introductory content or navigational links, typically at the top of the page or section.

- `<footer></footer>`  
  Represents the footer for a document or section, usually containing author information, copyright, and links.

- `<article></article>`  
  Represents a self-contained piece of content, such as a news article or blog post, that can be independently distributed or reused.

- `<aside></aside>`  
  Contains content that is tangentially related to the main content, like sidebars or pull quotes.

- `<nav></nav>`  
  Used for navigation links, helping users find their way around the site.

## Text and Inline Elements

- `<h1></h1>` to `<h6></h6>`  
  Defines headings, with `<h1>` being the most important and `<h6>` the least. They create a hierarchical structure for the content.

- `<p></p>`  
  Represents a paragraph of text, used to structure written content.

- `<span></span>`  
  An inline container for text or other inline elements, useful for styling a portion of text.

- `<strong></strong>`  
  Indicates strong importance; typically displayed in bold.

- `<em></em>`  
  Denotes emphasized text, usually rendered in italics.

## Multimedia Elements

- `<img>`  
  Embeds images; requires the `src` attribute for the image URL and `alt` for accessibility.

- `<audio></audio>`  
  Used to embed audio content, supporting various formats.

- `<video></video>`  
  Used to embed video content, supporting multiple formats and controls.

- `<iframe></iframe>`  
  Embeds another HTML page within the current page, often used for maps or external content.

## List Elements

- `<ul></ul>`  
  Defines an unordered list, typically displayed with bullet points.

- `<ol></ol>`  
  Defines an ordered list, typically displayed with numbers.

- `<li></li>`  
  Represents a list item within `<ul>` or `<ol>`.

## Table Elements

- `<table></table>`  
  Defines a table structure.

- `<tr></tr>`  
  Represents a table row.

- `<td></td>`  
  Defines a cell within a table row.

- `<th></th>`  
  Represents a header cell in a table, usually displayed in bold and centered.

## Form Elements

- `<form></form>`  
  Defines a form for user input, encapsulating form controls.

- `<input>`  
  Represents a variety of input fields (text, password, checkbox, radio, etc.); type defined by the `type` attribute.

- `<label></label>`  
  Associates a text label with a form element, improving acces

## Tailwind CSS - Essential CSS Properties

## Layout

- **Display**: Controls how an element is rendered.  
  - **Tailwind**: `block`, `inline`, `flex`, `grid`
  
- **Position**: Defines how an element is positioned relative to its normal position.  
  - **Tailwind**: `static`, `relative`, `absolute`, `fixed`, `sticky`

## Spacing

- **Margin**: Adds space outside an element.  
  - **Tailwind**: `m-{size}`, `mt-{size}`, `mr-{size}`, `mb-{size}`, `ml-{size}`

  - **Margin top**: In Tailwind CSS, mt-10 is a utility class that applies a margin-top to an element.     - **Tailwind**: mt-0, mt-10

- **Padding**: Adds space inside an element.  
  - **Tailwind**: `p-{size}`, `pt-{size}`, `pr-{size}`, `pb-{size}`, `pl-{size}`


## Sizing

- **Width/Height**: Controls the dimensions of an element.  
  - **Tailwind**: `w-{size}`, `h-{size}` (e.g., `w-full`, `h-1/2`)

- **Max Width/Height**: Sets limits on dimensions.  
  - **Tailwind**: `max-w-{size}`, `max-h-{size}` (e.g., `max-w-xs`, `max-h-screen`)

## Typography

- **Font Size**: Sets the size of the text.
  
  - **Tailwind**: `text-{size}` (e.g., `text-lg`, `text-2xl`)

- **Font Weight**: Controls the thickness of text.  
  - **Tailwind**: `font-normal`, `font-bold`

- **Line Height**: Sets the space between lines of text.  
  - **Tailwind**: `leading-{size}` (e.g., `leading-normal`)

- **Text Color**: Sets the color of the text.  
  - **Tailwind**: `text-{color}` (e.g., `text-gray-700`)

## Backgrounds

- **Background Color**: Sets the background color of an element.  
  - **Tailwind**: `bg-{color}` (e.g., `bg-white`, `bg-gray-200`)

- **Background Size**: Controls how background images are sized.  
  - **Tailwind**: `bg-cover`, `bg-contain`

## Borders

- **Border Width**: Defines the thickness of an element's border.  
  - **Tailwind**: `border`, `border-{size}` (e.g., `border-2`)

- **Border Color**: Sets the color of the border.  
  - **Tailwind**: `border-{color}` (e.g., `border-gray-300`)

- **Border Radius**: Creates rounded corners.  
  - **Tailwind**: `rounded`, `rounded-{size}` (e.g., `rounded-md`)

## Shadows

- **Box Shadow**: Adds a shadow effect to an element.  
  - **Tailwind**: `shadow`, `shadow-md`, `shadow-lg`

## Memory Aid Tips

- **Group Related Properties**: Organize by category for easier recall.
- **Use Mnemonics**: Create phrases to remember classes and properties.
- **Practice with Examples**: Apply in small projects to reinforce learning.

## Note from nextJS

In a Next.js application, the "use client"; directive is placed at the top of a file to ensure that a component is rendered on the client side rather than the server side.

## layout.tsx

In a Next.js project, layout.tsx is a special file that defines a shared layout for a specific part of your app. It acts as a template, helping to standardize the appearance and structure of pages or groups of pages. For example, you might use layout.tsx to define a header, sidebar, or footer that appears on every page within a given route.

## page.tsx

It  will render if folder is posted as localhost::3000/folderName

## Rendering children from Root

while using layout.tsx in different folder, we need to render children in return. Otherwise children folders will not render their components.

## How Route Groups Work Without Affecting the URL

Parentheses folders like (users) and (settings) are used only for grouping and will not appear in the URL.

```plaintext
app/
├── dashboard/
│   ├── (users)/
│   │   ├── list/
│   │   │   └── page.tsx  // URL: /dashboard/list
│   │   └── [id]/
│   │       └── page.tsx  // URL: /dashboard/:id
│   └── (settings)/
│       ├── general/
│       │   └── page.tsx  // URL: /dashboard/general
│       └── profile/
│           └── page.tsx  // URL: /dashboard/profile
```plaintext
