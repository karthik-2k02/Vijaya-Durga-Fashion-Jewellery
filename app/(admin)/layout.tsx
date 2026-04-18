import "../globals.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 antialiased min-h-screen">
        {/* Clean layout: No Header or Footer here */}
        {children}
      </body>
    </html>
  );
}