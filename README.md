# 🔐 KeyGen

**KeyGen** is a secure, client-side web application for generating X25519 public/private key pairs. Built with [Next.js](https://nextjs.org) and [React](https://react.dev), it ensures that your sensitive cryptographic keys are generated locally in your browser and never transmitted to any server.

## 🚀 Features

- **Local Generation**: Keys are created entirely within your browser using the Web Crypto API.
- **Secure**: No private keys are ever sent over the network.
- **X25519 Support**: Generates modern, secure key pairs suitable for key exchange.
- **User-Friendly Interface**: Simple, clean UI built with Tailwind CSS.
- **Privacy Focused**: What happens in your browser, stays in your browser.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Frontend**: React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Language**: TypeScript

## 📦 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

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

## 🔒 Security Note

This application generates keys for educational and practical use cases where client-side generation is sufficient. Always ensure you are running this on a trusted device and browser. Because keys are generated in-memory, refreshing the page will clear them unless you have saved them elsewhere.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
