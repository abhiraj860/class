export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
  return <html lang="en">
    <body>
      {/* {Layout of UI} */}
      <main>{children}</main>
    </body>
  </html>
}
