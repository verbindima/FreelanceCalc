/** Minimal layout for the embeddable widget — no nav, no footer, white bg */
export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      {children}
    </div>
  );
}
