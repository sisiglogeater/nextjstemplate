import "@styles/globals.css";

import Provider from "@components/Provider";

export const metadata = {
  title: "Dog sniffer",
  description: "Be your dog's matchmaker",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="bumblebee">
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
