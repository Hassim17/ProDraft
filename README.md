# 📝 ProDraft

**A real-time collaborative document editor built with Next.js, Liveblocks, Lexical Editor, and ShadCN UI.**  
Supports multiplayer editing, rich text formatting, and presence indicators — designed for speed, simplicity, and seamless collaboration.

---

## ✨ Features

-   📄 Google Docs-style collaborative editing.
-   ⚡ Real-time live collaboration between multiple users.
-   🔐 Login using Google or GitHub via Clerk.
-   🔗 Share documents with specific users via email permissions.
-   💬 Inline comments and emoji reactions in real-time.

---

## 🛠️ Tech Stack

| Layer         | Technology Used                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| Frontend      | [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Rich Text     | [Lexical Editor](https://lexical.dev/)                                                                        |
| Realtime Sync | [Liveblocks](https://liveblocks.io/)                                                                          |
| Auth          | [Clerk Auth](https://clerk.dev/)                                                                              |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/prodraft.git
cd prodraft
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of the project:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key_here
```

> 🔑 Replace the placeholder with your actual [Liveblocks](https://liveblocks.io/) public key.

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to start using the app.

---

## 🔐 Authentication & Authorization

-   Auth powered by **Clerk** with Google and GitHub SSO.
-   Documents can be shared with specific email addresses.
-   Role-based access (edit/comment/view) managed at the document level.

---

## 📡 API Reference

No traditional REST or GraphQL APIs.  
All synchronization and user presence is powered by **Liveblocks** and Lexical plugins.

> For more, see [Liveblocks Docs](https://liveblocks.io/docs) and [Lexical Docs](https://lexical.dev/).

---

## 🎯 Use Cases

-   Collaborative note-taking and document writing.
-   Real-time team project planning and documentation.
-   Lightweight internal tools or wikis.

---

## 🚧 Future Improvements

-   Add support for exporting documents (PDF, Markdown).
-   Version history and change tracking.
-   Notifications for comments or mentions.
-   Offline editing support.

