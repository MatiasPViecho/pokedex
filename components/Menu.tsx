export const MenuUl = ({
  children,
  classes = '',
  column = true,
}: Readonly<{
  children: React.ReactNode;
  classes?: string;
  column?: boolean;
}>) => {
  return (
    <ul
      className={`flex ${column ? 'flex-col' : ''} gap-2 px-2 py-2 ${classes}`}
    >
      {children}
    </ul>
  );
};
