export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 border-dashed border-black">
      {children}
    </div>
  );
}