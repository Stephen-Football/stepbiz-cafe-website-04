# Cafe Lumière - Website

A cozy cafe website featuring our menu and location.

## 🚀 Deployment

This project is configured to be deployed to **GitHub Pages** automatically using GitHub Actions.

### Setup Instructions

1.  **Create a GitHub Repository**: Create a new repository on GitHub and push this code.
2.  **Add API Key**:
    -   Go to your repository on GitHub.
    -   Navigate to **Settings** > **Secrets and variables** > **Actions**.
    -   Click **New repository secret**.
    -   Name: `GEMINI_API_KEY`
    -   Value: Your Google AI Studio API key.
3.  **Enable GitHub Pages**:
    -   Go to **Settings** > **Pages**.
    -   Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  **Push Code**: Once you push to the `main` branch, the deployment will start automatically.

## 🛠️ Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Create a `.env` file and add your `GEMINI_API_KEY`:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Build for production:
    ```bash
    npm run build
    ```

## 📄 License

Apache-2.0
