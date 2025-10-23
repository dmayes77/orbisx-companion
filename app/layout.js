import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import Navbar from '@/components/common/Navbar';

export const metadata = {
  title: 'OrbisX Companion - Style Your Booking Forms',
  description:
    "Create beautiful, customized booking forms with OrbisX Companion's pre-designed Bootstrap templates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-vh-100 d-flex flex-column">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
