
# Step 1: Basic Authentication with Auth0

## **Overview**
This step focuses on implementing basic authentication in your application using Auth0. Auth0 provides a secure and scalable solution for user authentication, making it easy to integrate login and logout functionality with minimal setup.

---

## **Objectives**
- Set up an Auth0 tenant to manage authentication.
- Integrate Auth0 into a frontend application built with Vite.
- Implement login and logout functionality.
- Display user profile information after successful login.

---

## **Prerequisites**
1. A basic understanding of frontend development using React or Next.js.
2. A Vite project set up and running on `http://localhost:5173`.
3. An Auth0 account. [Sign up here](https://auth0.com/).

---

## **Steps**

### 1. **Set Up Auth0 Tenant**
- Create a new application in your Auth0 dashboard.
- Choose **Single Page Application (SPA)** as the application type.
- Configure the following settings:
  - **Allowed Callback URLs**: `http://localhost:5173`
  - **Allowed Web Origins**: `http://localhost:5173`
  - **Allowed Logout URLs**: `http://localhost:5173`

### 2. **Install Auth0 SDK**
- Install the Auth0 React SDK in your Vite project:
  ```bash
  npm install @auth0/auth0-react
  ```

### 3. **Configure the Auth0Provider**
- Wrap your application with the `Auth0Provider` component to enable authentication.

### 4. **Implement Login and Logout**
- Add buttons for login and logout functionality.
- Use the `useAuth0` hook to access authentication methods and state.

### 5. **Display User Profile**
- Fetch and display user information (e.g., name, email) after successful login.

---

## **Testing**
1. Start your Vite project:
   ```bash
   npm run dev
   ```
2. Open your app at `http://localhost:5173`.
3. Click the **Login** button to redirect to the Auth0 login page.
4. After signing in, verify that your user profile is displayed.

---

## **Troubleshooting**
- If you encounter a `401 Unauthorized` error, ensure:
  - The `client_id` and `redirect_uri` match the Auth0 application settings.
  - `Allowed Callback URLs` and `Allowed Web Origins` are correctly configured in Auth0.

- Check the Auth0 logs for additional details under **Monitoring** > **Logs**.

---

## **Next Steps**
With authentication set up, you can now proceed to integrate the backend using AWS Lambda in Step 2.

---

Happy coding!
