import "@styles/globals.css";

import Provider from "@components/Provider";

export const metadata = {
  title: "Your title",
  description: "Your description",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
