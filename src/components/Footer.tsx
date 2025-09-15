import { Heart, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Kumasi Talent Hub</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Showcasing the incredible talents of Kumasi and connecting creative minds to opportunities. 
              Proudly celebrating Ghanaian culture and innovation since 2020.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-smooth" />
              <Instagram className="w-6 h-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-smooth" />
              <Twitter className="w-6 h-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Talents</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Gallery</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Get Involved</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Shipping</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Returns</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-small">
            © 2024 Kumasi Talent Hub. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;