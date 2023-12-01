const HamburgerIcon: React.FC = () => {
  const genericHamburgerLine = `h-[3px] w-8 my-[0.3rem] rounded-full bg-brand-lightest transition ease transform duration-300`;

  return (
    <div className="flex flex-col w-16 rounded justify-center items-center group -mr-6">
      <div className={`${genericHamburgerLine}`} />
      <div className={`${genericHamburgerLine}`} />
      <div className={`${genericHamburgerLine}`} />
    </div>
  );
};

export default HamburgerIcon;
