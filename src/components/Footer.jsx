const Footer = () => {
  return (
    <footer className="bg-violet-50 p-4 w-full flex flex-row justify-center items-center gap-4">
      <span>Built with ❤️ by Youssef AIT ALI</span>
      <span>•</span>
      <div className="flex gap-4">
        <a
          href="https://github.com/youssef-aitali"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-colors font-semibold"
        >
          GitHub
        </a>
        <a
          href="https://x.com/youssef93aitali"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-colors font-semibold"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
