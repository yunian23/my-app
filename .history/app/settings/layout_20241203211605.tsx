export default function Settinglayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        setting模版
        {children}
      </body>
    </html>
  );
}