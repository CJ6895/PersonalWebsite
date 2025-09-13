import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactSectionProps {
  onEmailClick: () => void;
}

export function ContactSection({ onEmailClick }: ContactSectionProps) {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">Let's Connect</h2>
        
        <Card className="p-8 text-center">
          <h3 className="mb-4">Ready to work together?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>carlosjoan.6895@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+1 (754) 262-1515</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Spring Hill, FL</span>
            </div>
          </div>
          
          <Button onClick={onEmailClick} size="lg" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Send Email
          </Button>
        </Card>
      </div>
    </section>
  );
}