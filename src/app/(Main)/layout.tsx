import MainHeader from "@/components/Layout/MainHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      <MainHeader />
      {children}
    </div>
  );
}
