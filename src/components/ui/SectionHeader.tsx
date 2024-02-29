export interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <h2 className="mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest">
        {title}
      </h2>
    </>
  );
};
