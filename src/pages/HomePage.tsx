import Header from "@/components/Header";
import Content from "@/components/Content";

const HomePage = () => {
  return (
    <>
      <Header />
      <Content />
      <footer className="w-full text-center py-6 text-xs text-gray-500 dark:text-gray-400 xl:px-16">
        © 2026 Ray Dev. All rights reserved.
      </footer>
    </>
  );
};

export default HomePage;